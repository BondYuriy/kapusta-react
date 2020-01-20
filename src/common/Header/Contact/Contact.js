import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ contact }) => (
  <div className={styles.contact}>
    <span className={styles.phone}>{contact.phone}</span>
    <span className={styles.text}>{contact.text}</span>
  </div>
);

export default Contact;
