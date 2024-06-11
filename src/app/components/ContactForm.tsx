'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      setResponse('An error occurred while sending the email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" onChange={handleChange} required />
      <label>Email</label>
      <input type="email" name="email" onChange={handleChange} required />
      <label>Message</label>
      <textarea name="message" onChange={handleChange} required />
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </button>
      {response && <p>{response}</p>}
    </form>
  );
};

export default ContactForm;
