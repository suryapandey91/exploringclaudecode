import Link from "next/link";

export const metadata = {
  title: "About — Surya Prakash Pandey",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero wrap">
        <Link href="/" className="back-link">
          <span className="ba">←</span> Back to home
        </Link>
        <div className="ph-num">02 — About</div>
        <h1>
          A bit about <em>me.</em>
        </h1>
        <p className="ph-sub">
          Where I go deep, how I think about product, and the craft behind
          twelve years of shipping.
        </p>
      </section>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <section className="section wrap">
          <div className="sec-head r">
            <div>
              <div className="sec-num">01 — What I do</div>
              <h2 className="sec-title">
                Where I go <em>deep.</em>
              </h2>
            </div>
            <p className="sec-sub">
              I&apos;m not a generalist. I go deep where{" "}
              <em>B2B product management</em> — discovery, roadmap, delivery
              and GTM — meets AI, data, and regulated-industry constraints at
              the same table.
            </p>
          </div>

          <div className="cards">
            <div className="card r">
              <div className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="4" r="2" />
                  <circle cx="4" cy="14" r="2" />
                  <circle cx="20" cy="14" r="2" />
                  <circle cx="12" cy="20" r="2" />
                  <path d="M12 6v12M5.5 13l5-7M18.5 13l-5-7M5.5 15l5 4M18.5 15l-5 4" />
                </svg>
              </div>
              <div className="card-body">
                <h3 className="card-title">Agentic AI Products</h3>
                <p className="card-desc">
                  <strong>3 platforms shipped</strong> · multi-agent
                  orchestration, RAG, LLM evaluation, guardrails &amp;
                  hallucination mitigation
                </p>
              </div>
            </div>

            <div className="card r">
              <div className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <ellipse cx="12" cy="5" rx="8" ry="2.5" />
                  <path d="M4 5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5" />
                  <path d="M4 11v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6" />
                </svg>
              </div>
              <div className="card-body">
                <h3 className="card-title">B2B SaaS, Data &amp; Knowledge Products</h3>
                <p className="card-desc">
                  <strong>$120M+ contributed in revenue</strong> · end-to-end
                  B2B product management — semantic layers, data governance,
                  lineage, lakehouse · Databricks, Snowflake, Unity Catalog
                </p>
              </div>
            </div>

            <div className="card r">
              <div className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 19V5M4 19h16" />
                  <path d="M7 15l4-5 3 3 5-7" />
                  <circle cx="19" cy="6" r="1.4" fill="currentColor" />
                </svg>
              </div>
              <div className="card-body">
                <h3 className="card-title">Product Strategy, Delivery &amp; GTM</h3>
                <p className="card-desc">
                  <strong>22% retention lift</strong> · roadmapping, program
                  &amp; project management, dual-track discovery, solution
                  consulting, pricing &amp; packaging for regulated procurement
                </p>
              </div>
            </div>

            <div className="card r">
              <div className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="9" cy="8" r="3" />
                  <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                  <circle cx="17" cy="6" r="2" />
                  <path d="M15 14c2.2 0 4 1.8 4 4" />
                </svg>
              </div>
              <div className="card-body">
                <h3 className="card-title">Coaching &amp; Mentoring</h3>
                <p className="card-desc">
                  <strong>50+ PMs &amp; engineers</strong> · career
                  transitions, B2B product &amp; AI/data PM craft,
                  project/program delivery, regulated-industry product
                  thinking · long-running 1:1 mentorship and team enablement
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="section wrap" id="philosophy">
        <div className="sec-head r">
          <div>
            <div className="sec-num">02 — How I work</div>
            <h2 className="sec-title">
              A few <em>opinions.</em>
            </h2>
          </div>
        </div>

        <div className="split">
          <p className="philos r">
            Good AI products are mostly <em>boring data work</em> dressed in
            interesting interfaces. I&apos;d rather ship a small thing that
            survives a Monday than a demo that survives a keynote.
          </p>

          <div className="about-meta r r-d1">
            <div className="meta-block">
              <span className="meta-lbl">Currently</span>
              <span className="meta-val">
                Principal Consultant, Data and AI Products — EXL · EXLData.ai
              </span>
            </div>
            <div className="meta-block">
              <span className="meta-lbl">Previously</span>
              <span className="meta-val">
                Sr. Manager, Technical Product — Gartner · 2020—2025
              </span>
            </div>
            <div className="meta-block">
              <span className="meta-lbl">Industries</span>
              <div className="chip-row">
                <span className="chip">Banking</span>
                <span className="chip">Insurance</span>
                <span className="chip">Healthcare</span>
                <span className="chip">Management Consulting</span>
                <span className="chip">Research</span>
                <span className="chip">Telecom</span>
                <span className="chip">Energy</span>
              </div>
            </div>
            <div className="meta-block">
              <span className="meta-lbl">Certified</span>
              <div className="chip-row">
                <span className="chip">AWS SA</span>
                <span className="chip">Databricks GenAI</span>
                <span className="chip">CSPO</span>
                <span className="chip">SAFe</span>
                <span className="chip">Darden UVA</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
