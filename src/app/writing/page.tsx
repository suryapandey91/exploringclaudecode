import Link from "next/link";

export const metadata = {
  title: "Writing — Surya Prakash Pandey",
};

const ARTICLES_URL =
  "https://www.linkedin.com/in/surya-prakash-pandey/recent-activity/articles/";

export default function WritingPage() {
  return (
    <>
      <section className="page-hero wrap">
        <Link href="/" className="back-link">
          <span className="ba">←</span> Back to home
        </Link>
        <div className="ph-num">04 — Writing</div>
        <h1>
          Recent <em>thinking.</em>
        </h1>
        <p className="ph-sub">
          Long-form pieces on the things I&apos;m working through — agents,
          governance, and the unglamorous middle of enterprise AI.
        </p>
      </section>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <div className="articles">

          <a href={ARTICLES_URL} target="_blank" rel="noopener" className="article r">
            <div className="meta">
              <span>Essay</span>
              <span>12 min</span>
            </div>
            <h4>The boring half of agentic AI nobody demos</h4>
            <p>
              Multi-agent systems are mostly orchestration, evaluation, and
              replay. The model is a small part of why your platform works.
            </p>
            <div className="read">Read →</div>
          </a>
          <a href={ARTICLES_URL} target="_blank" rel="noopener" className="article r r-d1">
            <div className="meta">
              <span>Framework</span>
              <span>8 min</span>
            </div>
            <h4>A discovery loop for regulated AI products</h4>
            <p>
              How I run dual-track discovery when legal, risk, and
              engineering all need to be in the room. With templates.
            </p>
            <div className="read">Read →</div>
          </a>
          <a href={ARTICLES_URL} target="_blank" rel="noopener" className="article r r-d2">
            <div className="meta">
              <span>Notes</span>
              <span>5 min</span>
            </div>
            <h4>What I learned mentoring 50 PMs</h4>
            <p>
              The two questions that came up in nearly every session, and
              what I wish I&apos;d answered better the first time around.
            </p>
            <div className="read">Read →</div>
          </a>
        </div>
      </section>

      <section className="section wrap" id="resources">
        <div className="page-hero" style={{ paddingTop: 0, paddingBottom: "clamp(28px,4vw,48px)" }}>
          <h2 className="sec-title">
            Notes for the <em>folks coming up.</em>
          </h2>
          <p className="ph-sub" style={{ marginTop: 16 }}>
            Honest, opinionated guides I wish I&apos;d had when I was making
            the jump. Not inspirational — practical. Engineers pivoting in,
            this one&apos;s mostly for you.
          </p>
        </div>

        <div className="res-list r">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=surya.pandey62@gmail.com&su=Resource%20request%3A%20Regulated-industry%20PM"
            target="_blank"
            rel="noopener"
            className="res"
          >
            <div className="res-num">→ 01</div>
            <div>
              <h3 className="res-title">Breaking into regulated-industry PM</h3>
              <p className="res-desc">
                Why banking and insurance PM roles look intimidating from the
                outside, why they&apos;re actually a great place to learn,
                and what to study before the interview.
              </p>
            </div>
            <div className="res-arr" aria-hidden="true">↗</div>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=surya.pandey62@gmail.com&su=Resource%20request%3A%20AI%20PM%20fundamentals"
            target="_blank"
            rel="noopener"
            className="res"
          >
            <div className="res-num">→ 02</div>
            <div>
              <h3 className="res-title">AI PM fundamentals, without the hype</h3>
              <p className="res-desc">
                RAG vs fine-tuning vs agents — when each is actually the
                right call. Evaluation, guardrails, and the unglamorous data
                work that decides whether your AI ships.
              </p>
            </div>
            <div className="res-arr" aria-hidden="true">↗</div>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=surya.pandey62@gmail.com&su=Resource%20request%3A%20Your%20first%20data%20product"
            target="_blank"
            rel="noopener"
            className="res"
          >
            <div className="res-num">→ 03</div>
            <div>
              <h3 className="res-title">Your first data product</h3>
              <p className="res-desc">
                From &quot;we have a dashboard&quot; to &quot;we have a
                product.&quot; Pricing, packaging, ownership, and the
                politics of who gets to define a metric.
              </p>
            </div>
            <div className="res-arr" aria-hidden="true">↗</div>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=surya.pandey62@gmail.com&su=Resource%20request%3A%20Engineer%20to%20PM"
            target="_blank"
            rel="noopener"
            className="res"
          >
            <div className="res-num">→ 04</div>
            <div>
              <h3 className="res-title">Engineer → PM, without losing your edge</h3>
              <p className="res-desc">
                What to keep, what to let go of, and how to translate ten
                years of SDLC instincts into product judgement that earns
                trust quickly.
              </p>
            </div>
            <div className="res-arr" aria-hidden="true">↗</div>
          </a>
        </div>
      </section>
    </>
  );
}
