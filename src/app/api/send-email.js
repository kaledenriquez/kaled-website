// pages/api/send-email.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    const mailgunDomain = process.env.NEXT_PUBLIC_MAILGUN_DOMAIN;
    const mailgunApiKey = process.env.NEXT_PUBLIC_MAILGUN_API_KEY;
  
    const data = new URLSearchParams({
      from: 'Your Website <kaledtrejo@hotmail.com>',
      to: 'kaledtrejo@hotmail.com',
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
  
    try {
      const response = await fetch(`https://api.mailgun.net/v3/${mailgunDomain}/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(`api:${mailgunApiKey}`).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
      });
  
      if (response.ok) {
        res.status(200).json({ message: 'Email sent successfully' });
      } else {
        const errorData = await response.json();
        res.status(500).json({ message: 'Error sending email', error: errorData });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error sending email', error: error.message });
    }
  }
  