import Link from "next/link";
import AboutCards from "@/components/AboutCards";

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

          <AboutCards />
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
