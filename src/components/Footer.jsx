import { siteConfig } from '../data/siteConfig';
import styles from './Footer.module.css';

export default function Footer() {
  const { company } = siteConfig;
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <a className={styles.logo} href="#hero">
        {company.name.split(' ')[0]}<span>.</span>Tech Solutions
      </a>
      <p className={styles.copy}>© {year} {company.name}. All rights reserved.</p>
      <ul className={styles.links}>
        <li><a href="#services">Services</a></li>
        <li><a href={`mailto:${company.email}`}>Contact</a></li>
        <li><a href="#">Privacy</a></li>
      </ul>
    </footer>
  );
}
