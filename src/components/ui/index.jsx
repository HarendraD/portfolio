import React from 'react';
import { motion } from 'framer-motion';
import styles from './ui.module.css';

export const GlassCard = ({ children, className = '', cyan = false, amber = false, ...props }) => {
  const cardClass = `${styles.glassCard} ${cyan ? styles.cyan : ''} ${amber ? styles.amber : ''} ${className}`;
  
  return (
    <motion.div 
      className={cardClass}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const GlassButton = ({ children, variant = 'primary', className = '', ...props }) => {
  const btnClass = `btn btn-${variant} ${className}`;
  
  return (
    <motion.button
      className={btnClass}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`${styles.sectionTitle} ${styles[align]}`} data-aos="fade-up">
      <motion.h2 className="gradient-text">{title}</motion.h2>
      {subtitle && <p className="text-muted">{subtitle}</p>}
      <div className={styles.titleUnderline}></div>
    </div>
  );
};
