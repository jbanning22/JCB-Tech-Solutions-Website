import { siteConfig } from '../data/siteConfig';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Client Results</p>
        <h2 className={styles.heading}>Built to grow real businesses</h2>
        <p className={styles.sub}>Early results from clients who switched to smarter systems.</p>

        <div className={styles.grid}>
          {siteConfig.testimonials.map(t => (
            <figure className={styles.card} key={t.author}>
              <div className={styles.stars}>{'★'.repeat(t.stars)}</div>
              <blockquote className={styles.quote}>"{t.quote}"</blockquote>
              <figcaption>
                <div className={styles.author}>{t.author}</div>
                <div className={styles.role}>{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
