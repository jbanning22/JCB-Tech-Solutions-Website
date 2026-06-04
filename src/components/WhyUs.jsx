import { siteConfig } from '../data/siteConfig';
import styles from './WhyUs.module.css';

export default function WhyUs() {
  return (
    <section id="why" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Why JCB Tech</p>
        <h2 className={styles.heading}>Built different. Delivered fast.</h2>
        <p className={styles.sub}>We're not a bloated agency. We're a lean AI-powered operation that moves at startup speed.</p>

        <div className={styles.grid}>
          {siteConfig.whyUs.map(item => (
            <div className={styles.item} key={item.title}>
              <div className={styles.icon} aria-hidden="true">{item.icon}</div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
