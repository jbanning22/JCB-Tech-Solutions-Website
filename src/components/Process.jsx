import { siteConfig } from '../data/siteConfig';
import styles from './Process.module.css';

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>How It Works</p>
        <h2 className={styles.heading}>From conversation to launch in days — not months</h2>
        <p className={styles.sub}>A streamlined, no-fluff process designed to get you results fast.</p>

        <div className={styles.steps}>
          <div className={styles.connector} aria-hidden="true" />
          {siteConfig.process.map(step => (
            <div className={styles.step} key={step.num}>
              <div className={styles.num}>{step.num}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
