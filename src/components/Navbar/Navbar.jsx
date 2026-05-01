import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { useScrollSpy, useScrolled } from '../../hooks/useScrollSpy';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_IDS = NAV_LINKS.map(l => l.id);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS, 120);
  const scrolled  = useScrolled(40);

  // Close menu on resize
  useEffect(() => {
    const handler = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {/* Logo */}
        <Link to="hero" smooth duration={600} className={styles.logo}>
          <span className={styles.logoIcon}>⌘</span>
          <span className={styles.logoText}>
            <span className={styles.logoName}>Dev</span>
            <span className={styles.logoDot}>.</span>
            <span className={styles.logoRole}>iOS</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <Link
                to={id}
                smooth
                duration={600}
                offset={-80}
                className={`${styles.link} ${activeId === id ? styles.linkActive : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
                {activeId === id && (
                  <motion.span
                    className={styles.linkUnderline}
                    layoutId="nav-underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className={styles.cta}>
          <Link to="contact" smooth duration={600} offset={-80}>
            <motion.button
              className={`btn btn-primary ${styles.ctaBtn}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Hire Me
            </motion.button>
          </Link>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <ul className={styles.mobileLinks}>
              {NAV_LINKS.map(({ id, label }, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={id}
                    smooth
                    duration={600}
                    offset={-80}
                    className={`${styles.mobileLink} ${activeId === id ? styles.mobileLinkActive : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className={styles.mobileCta}>
              <Link to="contact" smooth duration={600} onClick={() => setMenuOpen(false)}>
                <button className="btn btn-primary" style={{ width: '100%' }}>
                  Hire Me →
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
