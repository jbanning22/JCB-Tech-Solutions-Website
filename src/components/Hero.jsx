import { siteConfig } from '../data/siteConfig';
import styles from './Hero.module.css';

export default function Hero() {
  const { hero, company } = siteConfig;

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.badge}>
        <span className={styles.pulse} />
        {hero.badge}
      </div>

      <h1 className={styles.h1}>
        We <span className={styles.accent}>automate</span> &amp;<br />
        scale your <span className={styles.underlineGreen}>business</span>
      </h1>

      <p className={styles.sub}>{hero.subheading}</p>

      <div className={styles.actions}>
        <a className={styles.btnPrimary} href={`mailto:${company.email}`}>
          {hero.cta}
        </a>
        <a className={styles.btnGhost} href="#services">
          {hero.ctaSecondary} <span>→</span>
        </a>
      </div>

      <div className={styles.metrics}>
        {hero.metrics.map(m => (
          <div className={styles.metric} key={m.label}>
            <div className={styles.metricNum}>{m.num}</div>
            <div className={styles.metricLabel}>{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
