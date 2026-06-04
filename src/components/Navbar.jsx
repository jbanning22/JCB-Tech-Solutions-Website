import { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a className={styles.logo} href="#hero">
        {siteConfig.company.name.split(' ')[0]}<span className={styles.dot}>.</span>Tech
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {['services', 'process', 'why', 'testimonials'].map(id => (
          <li key={id}>
            <a href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <a className={styles.cta} href={`mailto:${siteConfig.company.email}`}>
        Get a Free Audit →
      </a>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
