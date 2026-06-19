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
    </>
  );
}
