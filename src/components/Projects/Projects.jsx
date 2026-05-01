import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { SectionTitle, GlassCard } from '../ui';
import { projects } from '../../data/portfolioData';
import styles from './Projects.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="A selection of high-impact iOS applications and SDKs delivered to market."
        />
        
        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className={styles.mySwiper}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className={styles.slide}>
                <GlassCard 
                  cyan={project.color === 'cyan'} 
                  amber={project.color === 'amber'}
                  className={styles.projectCard}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.year}>{project.year}</span>
                    <span className={styles.category}>{project.category}</span>
                  </div>
                  
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  
                  <div className={styles.techStack}>
                    {project.tech.map((t) => (
                      <span key={t} className={styles.techTag}>{t}</span>
                    ))}
                  </div>
                  
                  <div className={styles.stats}>
                    {Object.entries(project.stats).map(([key, val]) => (
                      <div key={key} className={styles.stat}>
                        <span className={styles.statLabel}>{key}</span>
                        <span className={styles.statVal}>{val}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className={styles.footer}>
                    <button className="btn btn-outline" style={{ width: '100%' }}>
                      View Case Study
                    </button>
                  </div>
                </GlassCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
