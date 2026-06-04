import { siteConfig } from '../data/siteConfig';
import styles from './CTA.module.css';

export default function CTA() {
  const { cta, company } = siteConfig;
  return (
    <section id="cta" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.badge}>{cta.badge}</p>
        <h2 className={styles.heading}>{cta.heading}</h2>
        <p className={styles.sub}>{cta.subheading}</p>
        <a className={styles.btn} href={`mailto:${company.email}`}>
          {cta.buttonText}
        </a>
      </div>
    </section>
  );
}
