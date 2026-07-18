"use client";
import { useState } from "react";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="4" r="2" />
        <circle cx="4" cy="14" r="2" />
        <circle cx="20" cy="14" r="2" />
        <circle cx="12" cy="20" r="2" />
        <path d="M12 6v12M5.5 13l5-7M18.5 13l-5-7M5.5 15l5 4M18.5 15l-5 4" />
      </svg>
    ),
    title: "Agentic AI Products",
    desc: (
      <>
        <strong>3 platforms shipped</strong> · multi-agent orchestration, RAG,
        LLM evaluation, guardrails &amp; hallucination mitigation
      </>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <ellipse cx="12" cy="5" rx="8" ry="2.5" />
        <path d="M4 5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5" />
        <path d="M4 11v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6" />
      </svg>
    ),
    title: "B2B SaaS, Data & Knowledge Products",
    desc: (
      <>
        <strong>$120M+ contributed in revenue</strong> · end-to-end B2B product
        management — semantic layers, data governance, lineage, lakehouse ·
        Databricks, Snowflake, Unity Catalog
      </>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 19V5M4 19h16" />
        <path d="M7 15l4-5 3 3 5-7" />
        <circle cx="19" cy="6" r="1.4" fill="currentColor" />
      </svg>
    ),
    title: "Product Strategy, Delivery & GTM",
    desc: (
      <>
        <strong>22% retention lift</strong> · roadmapping, program &amp; project
        management, dual-track discovery, solution consulting, pricing &amp;
        packaging for regulated procurement
      </>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <circle cx="17" cy="6" r="2" />
        <path d="M15 14c2.2 0 4 1.8 4 4" />
      </svg>
    ),
    title: "Coaching & Mentoring",
    desc: (
      <>
        <strong>50+ PMs &amp; engineers</strong> · career transitions, B2B
        product &amp; AI/data PM craft, project/program delivery,
        regulated-industry product thinking · long-running 1:1 mentorship and
        team enablement
      </>
    ),
  },
];

export default function AboutCards() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="cards">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`card r${active === i ? " is-featured" : ""}`}
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive(null)}
        >
          <div className="card-icon" aria-hidden="true">{card.icon}</div>
          <div className="card-body">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-desc">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
