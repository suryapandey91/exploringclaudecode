import Link from "next/link";

export const metadata = {
  title: "Selected Work — Surya Prakash Pandey",
};

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function WorkPage() {
  return (
    <>
      <section className="page-hero wrap">
        <Link href="/" className="back-link">
          <span className="ba">←</span> Back to home
        </Link>
        <div className="ph-num">03 — Selected work</div>
        <h1>
          Things I&apos;ve <em>shipped.</em>
        </h1>
        <p className="ph-sub">
          A handful of the products I&apos;ve owned end-to-end — each had
          real users, real procurement cycles, and real consequences when it
          broke.
        </p>
      </section>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <div className="work-list">
          <a
            href="https://www.exlservice.com/services-and-solutions/data-modernization/exldata-ai"
            target="_blank"
            rel="noopener"
            className="work-row r"
          >
            <div className="work-name">
              EXLData.ai
              <span className="sub">
                Agentic data management platform for regulated industries —
                currently shipping at EXL.
              </span>
            </div>
            <div className="work-cat">Agentic AI · Data Governance</div>
            <div className="work-year">2025–2026</div>
            <div className="work-arr" aria-hidden="true">
              <ArrowIcon />
            </div>
          </a>

          <a href="#contact" className="work-row r">
            <div className="work-name">
              Research Desk
              <span className="sub">
                Multi-agent research platform — 3,000+ MAUs, 80% artifacts
                captured in 9 months.
              </span>
            </div>
            <div className="work-cat">Multi-Agent · Internal Platform</div>
            <div className="work-year">2025</div>
            <div className="work-arr" aria-hidden="true">
              <ArrowIcon />
            </div>
          </a>

          <a href="#contact" className="work-row r">
            <div className="work-name">
              Research Data Finder
              <span className="sub">
                RAG-based GenAI product that cut manual discovery effort by
                90%.
              </span>
            </div>
            <div className="work-cat">GenAI · RAG</div>
            <div className="work-year">2024</div>
            <div className="work-arr" aria-hidden="true">
              <ArrowIcon />
            </div>
          </a>

          <a
            href="https://score.gartner.com"
            target="_blank"
            rel="noopener"
            className="work-row r"
          >
            <div className="work-name">
              Gartner Score
              <span className="sub">
                Diagnostic suite across 65+ functional areas — 10,000+ orgs
                utilizing it annually.
              </span>
            </div>
            <div className="work-cat">B2B SaaS · Product</div>
            <div className="work-year">2022–2023</div>
            <div className="work-arr" aria-hidden="true">
              <ArrowIcon />
            </div>
          </a>

          <a
            href="https://datainsights.g2digitalmarkets.com/login"
            target="_blank"
            rel="noopener"
            className="work-row r"
          >
            <div className="work-name">
              Data Insights
              <span className="sub">
                Owned a $19.5M+ ARR portfolio end-to-end — Reviews Insights
                (NLP and Data Analytics) &amp; Buyer Discovery (CRM
                Integrations).
              </span>
            </div>
            <div className="work-cat">B2B SaaS · Data Products</div>
            <div className="work-year">2020–2021</div>
            <div className="work-arr" aria-hidden="true">
              <ArrowIcon />
            </div>
          </a>

          <a href="#contact" className="work-row r">
            <div className="work-name">
              NBA Recommender
              <span className="sub">
                Next-best-action recommender for a retail bank — 75%
                adoption, 50% cycle time reduction.
              </span>
            </div>
            <div className="work-cat">ML · Retail Banking</div>
            <div className="work-year">2019 — 20</div>
            <div className="work-arr" aria-hidden="true">
              <ArrowIcon />
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
