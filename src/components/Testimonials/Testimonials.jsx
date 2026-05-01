import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { SectionTitle, GlassCard } from '../ui';
import { testimonials } from '../../data/portfolioData';
import styles from './Testimonials.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <SectionTitle 
          title="Client Proof" 
          subtitle="What industry leaders and clients say about our collaboration."
        />
        
        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className={styles.testimonialSwiper}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <GlassCard className={styles.testimonialCard}>
                  <div className={styles.quote}>“</div>
                  <p className={styles.text}>{item.text}</p>
                  
                  <div className={styles.footer}>
                    <div className={styles.avatar}>{item.avatar}</div>
                    <div className={styles.info}>
                      <p className={styles.name}>{item.name}</p>
                      <p className={styles.role}>{item.role}</p>
                    </div>
                  </div>
                  
                  <div className={styles.rating}>
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className={styles.star}>★</span>
                    ))}
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
