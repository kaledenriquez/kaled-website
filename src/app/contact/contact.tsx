'use client';
import { useState } from 'react';
import styles from "@/src/app/styles/contact.module.css";
import { PiPaperPlaneRightFill } from "react-icons/pi";

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !message) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          company,
          message,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message);
        setFirstName('');
        setLastName('');
        setEmail('');
        setCompany('');
        setMessage('');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setErrorMessage('Could not send the form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
  <>
  <div id="contact" className={styles.contactSection}>
    <div className={styles.container}>
      <div className={styles.contactHeader}> 
        <h1>Contact Me</h1>
        <div className={styles.underline}></div>
      </div>
        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.formControl}>
            <input
              type="text"
              id="firstName"
              value={firstName}
              placeholder='First Name'
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles.formControl}>
            <input
              type="text"
              id="lastName"
              value={lastName}
              placeholder='Last Name'
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={styles.formControl}>
            <input
              type="email"
              id="email"
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formControl}>
            <input
              type="text"
              id="company"
              value={company}
              placeholder='Company (Optional)'
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className={styles.formControl}>
            <textarea
              id="message"
              value={message}
              placeholder='Message'
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className={styles.submitButton} type="submit" disabled={submitting}>
            Submit 
            <PiPaperPlaneRightFill />  
          </button>
        </form>
      </div>
  </div>

  </>
  );
}
