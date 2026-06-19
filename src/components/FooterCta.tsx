export default function FooterCta() {
  return (
    <section className="cta" id="contact">
      <div className="wrap cta-inner">
        <div className="cta-eyebrow r">— Open to conversations</div>
        <h2 className="cta-h r r-d1">
          Let&apos;s build something <em>real.</em>
        </h2>
        <p className="cta-sub r r-d2">
          Whether it&apos;s a complicated AI product, a data platform that
          needs an owner, a thirty-minute mentorship chat — or a full case
          study on any of the projects above. Say hi. I read everything.
        </p>
        <div className="cta-actions r r-d2">
          <a
            href="mailto:surya.pandey62@gmail.com"
            className="btn btn-primary"
          >
            Email me <span className="arr">↗</span>
          </a>
          <a
            href="https://calendly.com/surya-pandey62"
            target="_blank"
            rel="noopener"
            className="btn btn-ghost"
          >
            Book a 30-min call <span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
