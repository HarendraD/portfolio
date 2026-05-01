import React from 'react';
import { motion } from 'framer-motion';
import { CountUp } from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { GlassCard, SectionTitle } from '../ui';
import { education } from '../../data/portfolioData';
import styles from './About.module.css';

// Replaces the unstable react-countup library with a robust custom hook
const useCountUp = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Power 4 Out easing for that premium Apple feel
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      setCount(easeProgress * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
};

// Internal stat counter component
const StatCounter = ({ value, suffix, inView }) => {
  const [current, setCurrent] = React.useState(0);
  
  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();
      
      const update = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        
        setCurrent(ease * value);
        
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          setCurrent(value);
        }
      };
      
      requestAnimationFrame(update);
    }
  }, [inView, value]);

  const decimals = value % 1 !== 0 ? 1 : 0;
  
  return (
    <div className={`${styles.statValue} text-cyan`}>
      {current.toLocaleString(undefined, { 
        minimumFractionDigits: decimals, 
        maximumFractionDigits: decimals 
      })}
      {suffix}
    </div>
  );
};

const stats = [
  { label: 'Apps Shipped', value: 20, suffix: '+' },
  { label: 'Stability Lift', value: 25, suffix: '%' },
  { label: 'Dev Speed', value: 30, suffix: '%' },
  { label: 'App Rating', value: 4.9, suffix: '' },
];

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="section">
      <div className="container" ref={ref}>
        <SectionTitle 
          title="Digital Architect" 
          subtitle="Passionate about building fluid, performant, and delightful iOS experiences that users love."
        />
        
        <div className={styles.content}>
          <div className={styles.imageContainer} data-aos="fade-right">
            <GlassCard className={styles.profileCard}>
              <div className={styles.imageWrapper}>
                <img src="/src/assets/profile.png" alt="Senior iOS Engineer" className={styles.profileImage} />
                <div className={styles.imageOverlay}></div>
              </div>
            </GlassCard>
            <div className={`${styles.decoration} ${styles.deco1}`}></div>
            <div className={`${styles.decoration} ${styles.deco2}`}></div>
          </div>
          
          <div className={styles.textContent} data-aos="fade-left">
            <h3>Senior iOS Engineer & Product Strategist</h3>
            <p>
             With over three years of professional experience in the Apple ecosystem, I specialize in architecting high-performance native solutions that bridge the gap between complex data and intuitive user experience. My approach integrates technical excellence in <strong>Swift</strong> and <strong>SwiftUI</strong> with a background in Data Science, allowing me to build mobile architectures that are as analytical as they are aesthetic.
            </p>
            <p>
             I focus on clinical reliability, performance tuning, and the seamless integration of AI-native workflows. I don't just write code; I build scalable, maintainable products that put human empathy and business value at the core of every micro-decision.
            </p>
            
            <div className={styles.statsGrid}>
              {stats.map((stat, idx) => (
                <div key={idx} className={styles.statItem}>
                  <StatCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    inView={inView} 
                  />
                  <p className="text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.check}>✓</span>
                <span>Swift Concurrency & Modern Swift</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.check}>✓</span>
                <span>StoreKit 2 & FinTech Integration</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.check}>✓</span>
                <span>AI-Native Development Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
