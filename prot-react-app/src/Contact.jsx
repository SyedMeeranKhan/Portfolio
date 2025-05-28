import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const BACKEND_URL = "http://localhost/ANIMATED_PORTFOLIO/beckend/submit-form.php"; // Adjust to match your backend

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({ type: "info", msg: "Sending..." });
    try {
      const res = await axios.post(BACKEND_URL, form);
      if (res.data.success) {
        setStatus({ type: "success", msg: "Thank you! Message sent." });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", msg: res.data.message });
      }
    } catch (err) {
      setStatus({ type: "error", msg: "Could not send message. Try again later." });
    }
  };

  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required />
        <button type="submit">Send Message</button>
        {status.msg && (
          <div className={`form-status ${status.type}`}>{status.msg}</div>
        )}
      </form>
      <div className="contact-socials">
        <a href="mailto:youremail@example.com">Email</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}
export default Contact;