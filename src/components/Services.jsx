import { siteConfig } from '../data/siteConfig';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>What We Build</p>
        <h2 className={styles.heading}>Software solutions that actually move the needle</h2>
        <p className={styles.sub}>Every solution is custom-built for your business — no bloated software, no cookie-cutter templates.</p>

        <div className={styles.grid}>
          {siteConfig.services.map(s => (
            <article className={styles.card} key={s.title}>
              <div className={styles.icon} aria-hidden="true">{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.price}>
                <strong>{s.price}</strong> &nbsp;·&nbsp; {s.retainer}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
