const skillRows: Record<string, string[]> = {
  "ticker-1": [
    "B2B product management",
    "Product strategy",
    "Roadmapping",
    "Program & project management",
    "Release & delivery management",
    "Risk & dependency management",
    "Backlog prioritization",
    "Dual-track discovery",
    "Outcome-driven OKRs",
    "Pricing & packaging",
    "Go-to-market",
    "Solution consulting",
    "Agile · SAFe",
    "IBM Design Thinking",
    "Story mapping",
    "Jobs-to-be-done",
    "Product analytics",
    "Experimentation & A/B",
  ],
  "ticker-2": [
    "Multi-agent orchestration",
    "Agentic AI",
    "RAG & vector retrieval",
    "LLM evaluation",
    "Guardrails & hallucination mitigation",
    "Semantic layers",
    "Data governance",
    "Data lineage",
    "Unity Catalog",
    "Databricks",
    "Snowflake",
    "AWS · Azure",
    "Microservices",
    "Event-driven architecture",
    "MLOps",
    "BCBS 239",
  ],
  "ticker-3": [
    "Executive stakeholder management",
    "Cross-functional leadership",
    "Change management",
    "Org transformation",
    "Storytelling & narrative",
    "Executive communication",
    "Mentorship & coaching",
    "Team building",
    "Hiring & talent development",
    "Negotiation",
    "Conflict resolution",
    "Workshop facilitation",
  ],
};

function Row({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <>
      {doubled.map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </>
  );
}

export default function Ticker() {
  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker-row">
        <div className="ticker-cat">Product · Delivery · Strategy</div>
        <div className="ticker">
          <Row items={skillRows["ticker-1"]} />
        </div>
      </div>
      <div className="ticker-row">
        <div className="ticker-cat">Technical · Data · AI / GenAI</div>
        <div className="ticker">
          <Row items={skillRows["ticker-2"]} />
        </div>
      </div>
      <div className="ticker-row">
        <div className="ticker-cat">Stakeholders · People · Leadership</div>
        <div className="ticker slow">
          <Row items={skillRows["ticker-3"]} />
        </div>
      </div>
    </div>
  );
}
