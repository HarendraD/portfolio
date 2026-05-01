import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui';
import { skills } from '../../data/portfolioData';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle 
          title="Technical Arsenal" 
          subtitle="A comprehensive breakdown of my specialized iOS toolkit and modern engineering methodologies."
        />
        
        <div className={styles.grid}>
          {Object.entries(skills).map(([category, items], catIdx) => (
            <div key={category} className={styles.categoryWrapper} data-aos="fade-up" data-aos-delay={catIdx * 100}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <div className={styles.badgeCloud}>
                {items.map((skill, idx) => (
                  <motion.div 
                    key={skill.name}
                    className={styles.skillBadge}
                    whileHover={{ y: -5, scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div className={styles.badgeGlow}></div>
                    <div className={styles.badgeContent}>
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
