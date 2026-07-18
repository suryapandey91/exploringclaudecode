import Link from "next/link";
import Ticker from "@/components/Ticker";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero wrap">
        <h1 className="hero-name r r-d1">
          Surya Prakash <span className="amp">Pandey</span>
        </h1>

        <div className="hero-pos r r-d2">
          <span>Data, AI &amp; B2B SaaS Products</span>
          <span className="sep">·</span>
          <span>
            <strong>$138M+ contributed to revenue</strong>
          </span>
          <span className="sep">·</span>
          <span>BFSI/Healthcare/Mgmt. Consulting</span>
        </div>

        <div className="hero-current r r-d2" aria-label="Current role">
          <span className="pulse" aria-hidden="true"></span>
          <span className="cr-lbl">Currently</span>
          <span className="cr-val">
            Principal Consultant, Data and AI Products at <strong>EXL</strong>{" "}
            <span className="cr-sep">—</span> building <strong>EXLData.ai</strong>
          </span>
        </div>
        <div className="kicker r r-d2" style={{ marginTop: 16, marginBottom: 0 }}>
          Gurgaon, India
        </div>

        <div className="hero-row">
          <div className="r r-d3">
            <div className="hero-intro">
              <p>
                I&apos;ve spent <em>twelve years</em> figuring out how to
                build software that actually works — first as an engineer,
                then as a <em>B2B product manager</em>, and for the last few
                as someone who runs the full arc of product management —
                discovery, delivery, and GTM — for AI and data products in
                the industries where the stakes are real.
              </p>
              <p>
                Today I&apos;m Principal Consultant for Data and AI Products
                at EXL, building an agentic data management platform for
                financial services and insurance. Before that, I owned
                multiple B2B and data products at Gartner and launched a
                multi-agent research platform used by 3,000+ analysts in my
                last stint.
              </p>
              <p>
                I&apos;ve also helped <em>50+ product folks</em> grow into
                the work — engineers pivoting in, early-career PMs finding
                their niche. That part is non-negotiable.
              </p>
            </div>
            <div className="social">
              <a
                href="https://www.linkedin.com/in/surya-prakash-pandey/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <svg className="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.44 0h4.37v1.92h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.48 3.05 5.48 7.02V22h-4.56v-6.4c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.39V22H7.66V8z" />
                </svg>
                LinkedIn
              </a>
              <a href="/Surya-Prakash-Pandey-Resume.pdf" download aria-label="Resume">
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                  <path d="M14 3v6h6M8 13h8M8 17h6" />
                </svg>
                Resume
              </a>
              <a href="mailto:surya.pandey62@gmail.com" aria-label="Email">
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                surya.pandey62@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="logos r">
          <div className="logos-inner">
            <div className="logos-lbl">— Previously at</div>
            <div className="logos-row">
              <span className="logo-mark">Gartner</span>
              <span className="logo-mark">
                UnitedHealth<span className="sub">Optum</span>
              </span>
              <span className="logo-mark">Xebia</span>
              <span className="logo-mark">Tech Mahindra</span>
              <span className="logo-mark">Ericsson</span>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="section wrap" id="impact">
        <div className="sec-head r">
          <div>
            <div className="sec-num">01 — Impact</div>
            <h2 className="sec-title">
              Numbers that <em>actually happened.</em>
            </h2>
          </div>
          <p className="sec-sub">
            Outcomes from products I&apos;ve owned end-to-end — not team-wide
            credit, not &quot;contributed to,&quot; not roadmap aspirations.
          </p>
        </div>

        <div className="impact">
          <div className="stat r">
            <div className="stat-num">
              $30<span className="u">M+</span>
            </div>
            <div className="stat-lbl">
              ARR from Data Insights &amp; Gartner Score, owned end-to-end at
              Gartner.
            </div>
          </div>
          <div className="stat r r-d1">
            <div className="stat-num">
              90<span className="u">%</span>
            </div>
            <div className="stat-lbl">
              Reduction in manual data discovery effort via the GenAI
              Research Data Finder.
            </div>
          </div>
          <div className="stat r r-d2">
            <div className="stat-num">
              3,000<span className="u">+</span>
            </div>
            <div className="stat-lbl">
              Monthly active users on Research Desk, a multi-agent research
              platform.
            </div>
          </div>
          <div className="stat r">
            <div className="stat-num">
              95<span className="u">%</span>
            </div>
            <div className="stat-lbl">
              User adoption post-platform migration across 10+ enterprise
              data sources.
            </div>
          </div>
          <div className="stat r r-d1">
            <div className="stat-num">
              100<span className="u">→6</span>
            </div>
            <div className="stat-lbl">
              Fragmented tools consolidated into six global standard
              platforms.
            </div>
          </div>
          <div className="stat r r-d2">
            <div className="stat-num">
              50<span className="u">+</span>
            </div>
            <div className="stat-lbl">
              Product professionals personally mentored — engineers, PMs, AI
              pivots.
            </div>
          </div>
        </div>

        <Ticker />
      </section>

      {/* HOME ENTRY POINTS */}
      <section className="section wrap">
        <div className="jump-grid">
          <Link href="/about" className="jump-card r">
            <div className="jump-num">02</div>
            <div className="jump-main">
              <h3>
                About <em>→</em>
              </h3>
              <p>
                Where I go deep, how I think about product, and the craft
                behind twelve years of work.
              </p>
            </div>
            <div className="jump-arr" aria-hidden="true">
              →
            </div>
          </Link>
          <Link href="/work" className="jump-card r r-d1">
            <div className="jump-num">03</div>
            <div className="jump-main">
              <h3>
                Selected work <em>→</em>
              </h3>
              <p>
                Six products I&apos;ve owned end-to-end — agentic platforms,
                RAG systems, B2B SaaS at scale.
              </p>
            </div>
            <div className="jump-arr" aria-hidden="true">
              →
            </div>
          </Link>
          <Link href="/writing" className="jump-card r r-d2">
            <div className="jump-num">04</div>
            <div className="jump-main">
              <h3>
                Writing <em>→</em>
              </h3>
              <p>
                Long-form thinking on agents, governance, and the unglamorous
                middle of enterprise AI.
              </p>
            </div>
            <div className="jump-arr" aria-hidden="true">
              →
            </div>
          </Link>
        </div>
      </section>

    </>
  );
}
