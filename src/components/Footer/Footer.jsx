import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>⌘</span>
              <span>Dev.iOS</span>
            </div>
            <p className={styles.tagline}>
              Crafting premium mobile experiences for the Apple ecosystem.
            </p>
          </div>
          
          <div className={styles.right}>
            <p className={styles.copyright}>
              © {year} Senior iOS Portfolio. Built with <span className={styles.heart}>❤</span> & <span className={styles.tech}>React</span>.
            </p>
            <div className={styles.links}>
              <a href="#">Privacy</a>
              <a href="#">Legal</a>
              <a href="#">Status</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
