import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { SectionTitle, GlassCard } from '../ui';
import styles from './Contact.module.css';

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulating email send for now as we don't have real keys
    // In production, use: await emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form.current, 'PUBLIC_KEY')
    setTimeout(() => {
      console.log("Form Data:", data);
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle 
          title="Inbound Terminal" 
          subtitle="Ready to scale your iOS vision? Let's discuss your project or role requirements."
        />
        
        <div className={styles.content}>
          <div className={styles.infoSide} data-aos="fade-right">
            <GlassCard className={styles.infoCard}>
              <h3>Contact Details</h3>
              <div className={styles.contactItems}>
                <div className={styles.item}>
                  <span className={styles.icon}>✉</span>
                  <div className={styles.details}>
                    <p className={styles.label}>Email</p>
                    <p className={styles.value}>harendradilshan57@gmail.com</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <span className={styles.icon}>📍</span>
                  <div className={styles.details}>
                    <p className={styles.label}>Location</p>
                    <p className={styles.value}>Colombo, Sri Lanka</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <span className={styles.icon}>🕒</span>
                  <div className={styles.details}>
                    <p className={styles.label}>Time Zone</p>
                    <p className={styles.value}>IST (UTC+5:30)</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.socials}>
                <a href="https://github.com/HarendraD" className={styles.socialBtn}>GitHub</a>
                <a href="https://www.linkedin.com/in/harendradilshan/" className={styles.socialBtn}>LinkedIn</a>
              </div>
            </GlassCard>
          </div>
          
          <div className={styles.formSide} data-aos="fade-left">
            <GlassCard className={styles.formCard}>
              <form ref={form} onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    {...register("name", { required: true })}
                    className={errors.name ? styles.errorInput : ''}
                  />
                  {errors.name && <span className={styles.errorText}>Required</span>}
                </div>
                
                <div className={styles.formGroup}>
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className={errors.email ? styles.errorInput : ''}
                  />
                  {errors.email && <span className={styles.errorText}>Valid email required</span>}
                </div>
                
                <div className={styles.formGroup}>
                  <label>Project / Inquiry Type</label>
                  <select {...register("type")}>
                    <option value="freelance">Freelance iOS Dev</option>
                    <option value="job">Job Opportunity</option>
                    <option value="consulting">Code Audit / Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label>Message</label>
                  <textarea 
                    rows="5" 
                    placeholder="Tell me about your project or role..."
                    {...register("message", { required: true })}
                    className={errors.message ? styles.errorInput : ''}
                  ></textarea>
                  {errors.message && <span className={styles.errorText}>Message is required</span>}
                </div>
                
                <button 
                  type="submit" 
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Transmitting...' : isSuccess ? 'Message Sent! ✓' : 'Send Message →'}
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
