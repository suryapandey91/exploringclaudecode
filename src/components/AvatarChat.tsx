"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const OPENING =
  "Hi, I'm Surya's AI avatar. I'm a B2B product manager who builds Data & AI products end-to-end — from discovery and roadmap through delivery and GTM. What brings you here today — are you hiring, exploring a collaboration, or looking for mentorship guidance?";

const QUICK_CHIPS = [
  "I'm hiring — tell me about your fit",
  "What have you built?",
  "Can you mentor me?",
  "Which industries have you worked in?",
];

type ChatMessage = { role: "user" | "assistant"; content: string };

function renderMarkdown(text: string): string {
  let t = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  t = t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/(https?:\/\/[^\s<)]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');

  const lines = t.split("\n");
  const out: string[] = [];
  let buf: string[] = [];
  const flush = () => {
    if (buf.length) {
      out.push("<ul>" + buf.map((b) => "<li>" + b + "</li>").join("") + "</ul>");
      buf = [];
    }
  };
  for (const line of lines) {
    const m = line.match(/^\s*[-•]\s+(.*)/);
    if (m) {
      buf.push(m[1]);
    } else {
      flush();
      if (line.trim()) out.push("<p>" + line + "</p>");
    }
  }
  flush();
  return out.join("");
}

export default function AvatarChat() {
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [showChips, setShowChips] = useState(false);
  const [displayMessages, setDisplayMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([]);
  const [inputValue, setInputValue] = useState("");

  const convoRef = useRef<ChatMessage[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [displayMessages, busy]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function openPanel() {
    setOpen(true);
    if (!started) {
      setStarted(true);
      setDisplayMessages([{ role: "bot", text: OPENING }]);
      setShowChips(true);
    }
    setTimeout(() => textareaRef.current?.focus(), 350);
  }

  function closePanel() {
    setOpen(false);
  }

  async function submit(text: string) {
    if (busy || !text.trim()) return;
    setShowChips(false);
    setBusy(true);
    setDisplayMessages((prev) => [...prev, { role: "user", text }]);
    convoRef.current.push({ role: "user", content: text });

    try {
      const messages: ChatMessage[] = [
        { role: "assistant", content: OPENING },
        ...convoRef.current,
      ];
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages }),
      });
      if (!res.ok) throw new Error("request failed");
      const data = await res.json();
      const clean =
        (data.reply || "").trim() || "Sorry — I didn't catch that. Could you rephrase?";
      setDisplayMessages((prev) => [...prev, { role: "bot", text: clean }]);
      convoRef.current.push({ role: "assistant", content: clean });
    } catch {
      setDisplayMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "I'm having trouble responding right now. You can always reach Surya directly on LinkedIn: https://www.linkedin.com/in/surya-prakash-pandey/",
        },
      ]);
    } finally {
      setBusy(false);
      textareaRef.current?.focus();
    }
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = inputValue;
    setInputValue("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
    submit(v);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const v = inputValue;
      setInputValue("");
      if (textareaRef.current) textareaRef.current.style.height = "auto";
      submit(v);
    }
  }

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 110) + "px";
  }

  return (
    <div className="avatar-root" id="avatarRoot">
      <button
        className={`avatar-launch${open ? " hide" : ""}`}
        id="avatarLaunch"
        aria-label="Chat with Surya's AI avatar"
        onClick={openPanel}
      >
        <span className="avatar-pfp">
          <Image src="/headshot.jpg" alt="Surya" width={40} height={40} />
        </span>
        <span className="avatar-launch-txt">
          <b>Ask my AI avatar</b>
          <small>
            <span className="dot-live"></span> Online — ask me anything
          </small>
        </span>
      </button>

      <div
        className={`avatar-panel${open ? " open" : ""}`}
        id="avatarPanel"
        role="dialog"
        aria-label="Chat with Surya's AI avatar"
      >
        <div className="ap-head">
          <span className="avatar-pfp">
            <Image src="/headshot.jpg" alt="Surya" width={42} height={42} />
          </span>
          <div className="ap-id">
            <b>Surya&apos;s AI avatar</b>
            <small>
              <span className="dot-live"></span> Typically replies instantly
            </small>
          </div>
          <button className="ap-x" aria-label="Close chat" onClick={closePanel}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="ap-body" ref={bodyRef}>
          {displayMessages.map((m, i) => (
            <div
              key={i}
              className={`msg ${m.role === "user" ? "user" : "bot"}`}
              dangerouslySetInnerHTML={{ __html: renderMarkdown(m.text) }}
            />
          ))}
          {showChips && (
            <div className="ap-chips">
              {QUICK_CHIPS.map((q) => (
                <button
                  key={q}
                  type="button"
                  className="ap-chip"
                  onClick={() => submit(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          )}
          {busy && (
            <div className="typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>

        <div className="ap-foot">
          <form className="ap-form" onSubmit={handleFormSubmit}>
            <textarea
              className="ap-input"
              rows={1}
              placeholder="Ask about my work, experience, mentorship…"
              autoComplete="off"
              ref={textareaRef}
              value={inputValue}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
            />
            <button className="ap-send" type="submit" aria-label="Send" disabled={busy}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
          <div className="ap-disc">AI avatar · may be imperfect · verify key details directly</div>
        </div>
      </div>
    </div>
  );
}
