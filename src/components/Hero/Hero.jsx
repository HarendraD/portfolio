import React, { useCallback, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import heroImg from '../../assets/hero.jpg';
import styles from './Hero.module.css';

const NameTypewriter = ({ text }) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    }
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      style={{ display: 'inline-block', overflow: 'hidden' }}
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="gradient-text"
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function Hero() {
  const [showName, setShowName] = useState(true);

  useEffect(() => {
    let timeout;
    if (showName) {
      // Stay visible for 3 seconds
      timeout = setTimeout(() => setShowName(false), 3500);
    } else {
      // Small gap of 800ms after disappearing before showing again
      timeout = setTimeout(() => setShowName(true), 800);
    }
    return () => clearTimeout(timeout);
  }, [showName]);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "grab" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        grab: { distance: 200, links: { opacity: 0.5 } },
      },
    },
    particles: {
      color: { value: "#00F5FF" },
      links: { color: "#00F5FF", distance: 150, enable: true, opacity: 0.15, width: 1 },
      move: { direction: "none", enable: true, outModes: { default: "bounce" }, speed: 1 },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <section id="hero" className={styles.hero}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className={styles.particles}
      />
      
      <div className="container">
        <motion.div 
          className={styles.visual}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className={styles.imageWrapper}>
            <img src={heroImg} alt="Harendra Dilshan" className={styles.heroImage} />
            <div className={styles.imageOverlay}></div>
          </div>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ position: 'relative', zIndex: 2 }}
          >
            <h1 className={styles.title}>
              Hi, I'm <br />
              <div style={{ minHeight: '1.2em' }}>
                <AnimatePresence mode="wait">
                  {showName && (
                    <NameTypewriter key="name" text="Harendra Dilshan" />
                  )}
                </AnimatePresence>
              </div>
            </h1>

            <span className={styles.badge}>
              <span className={styles.badgeDot}></span>
              SENIOR SOFTWARE ENGINEER
            </span>
            
            <p className={styles.description}>
              Specializing in high-performance software architecture and AI-native engineering. 
              Bridging the gap between premium design and cutting-edge digital solutions 
              for global brands and ambitious startups.
            </p>
            
            <div className={styles.actions}>
              <Link to="projects" smooth duration={600} offset={-80}>
                <button className="btn btn-primary">View My Work</button>
              </Link>
              <Link to="contact" smooth duration={600} offset={-80}>
                <button className="btn btn-outline">Start a Project</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}
