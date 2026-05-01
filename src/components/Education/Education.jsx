import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, GlassCard } from '../ui';
import { education } from '../../data/portfolioData';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionTitle 
          title="Academic Foundation" 
          subtitle="A summary of my formal education and specialized software engineering training."
        />
        
        <div className={styles.grid}>
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard className={styles.eduCard}>
                <div className={styles.header}>
                  <div className={styles.icon}>🎓</div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{edu.period}</span>
                  </div>
                </div>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.school}>{edu.school}</p>
                <div className={styles.badge}>Academic</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
