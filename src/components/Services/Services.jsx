import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard, SectionTitle } from '../ui';
import { services } from '../../data/portfolioData';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionTitle 
          title="Premium Services" 
          subtitle="Specialized iOS engineering services for high-growth companies and visionaries."
        />
        
        <div className={styles.grid}>
          {services.map((service, idx) => (
            <GlassCard 
              key={service.id}
              cyan={service.color === 'cyan'}
              amber={service.color === 'amber'}
              className={styles.serviceCard}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {service.highlight && (
                <span className={styles.badge}>{service.highlight}</span>
              )}
              
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.subtitle}>{service.subtitle}</p>
              
              <p className={styles.description}>{service.description}</p>
              
              <ul className={styles.features}>
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx}>
                    <span className={styles.dot}></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`btn btn-${service.color === 'amber' ? 'amber' : 'outline'} ${styles.btn}`}>
                Learn More
              </button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
