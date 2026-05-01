import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, GlassCard } from '../ui';
import { experiences } from '../../data/portfolioData';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle 
          title="Career Journey" 
          subtitle="My professional evolution within the mobile engineering landscape."
        />
        
        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div key={exp.id} className={styles.timelineItem} data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}>
              <div className={styles.timelinePoint}>
                <div className={styles.pulse}></div>
              </div>
              
              <GlassCard className={styles.expCard} cyan={idx === 0}>
                <div className={styles.header}>
                  <div className={styles.roleInfo}>
                    <h3>{exp.role}</h3>
                    <p className={styles.company}>{exp.company} <span className={styles.dot}>•</span> {exp.location}</p>
                  </div>
                  <div className={styles.period}>
                    <span>{exp.period}</span>
                    <span className={styles.type}>{exp.type}</span>
                  </div>
                </div>
                
                <p className={styles.description}>{exp.description}</p>
                
                <ul className={styles.highlights}>
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          ))}
          <div className={styles.timelineLine}></div>
        </div>
      </div>
    </section>
  );
}
