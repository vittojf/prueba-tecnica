// components/ContactForm.js
"use client"
import { useState } from 'react';
import styles from './ContactForm.module.css';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación básica
    if (formData.name && formData.email && formData.message) {
      setSuccess(true);
    }
  };

  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} className={styles.contactForm}>
      <h3>Contáctame</h3>
      {success ? (
        <p>Mensaje enviado con éxito!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          
            
          <div className={styles.inputField}>
            <input type="text" id="name" name="name"   value={formData.name} onChange={handleChange} required />
            <label htmlFor="name">Nombre</label>
          </div>
          <div className={styles.inputField}>
            <input type="text" id="email" name="email"   value={formData.email} onChange={handleChange} required />
            <label htmlFor="email">Email</label>
          </div>
          
          <div className={styles.inputField}>
            <textarea id="message" name="message" value={formData.message}  onChange={handleChange} required></textarea>
            <label htmlFor="message">Deja tu Mensaje</label>
          </div>
          <button type="submit">Enviar</button>
        </form>
      )}
    </motion.section >
  );
};

export default ContactForm;
