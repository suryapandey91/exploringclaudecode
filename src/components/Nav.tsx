"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/about", key: "about", label: "About" },
  { href: "/work", key: "work", label: "Work" },
  { href: "/writing", key: "writing", label: "Writing" },
  { href: "#contact", key: "contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [contactActive, setContactActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      if (!contact) return;
      setContactActive(contact.offsetTop <= window.scrollY + 140);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const baseKey = pathname === "/" ? "home" : pathname.split("/")[1];
  const activeKey = contactActive ? "contact" : baseKey;

  return (
    <nav className="nav" aria-label="Primary">
      <div className="wrap nav-inner">
        <Link href="/" className="brand">
          <span className="dot" aria-hidden="true"></span>Surya Prakash P.
        </Link>
        <div className="nav-links">
          {LINKS.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={activeKey === l.key ? "is-active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <a
          href="https://calendly.com/surya-pandey62/new-meeting"
          target="_blank"
          rel="noopener"
          className="nav-cta"
        >
          Let&apos;s talk <span className="arr">→</span>
        </a>
      </div>
    </nav>
  );
}
