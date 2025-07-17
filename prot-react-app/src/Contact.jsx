import React, { useState } from "react";
import "./App.css";

const BACKEND_URL = "/api/submit-form";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "info", msg: "Sending..." });

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", msg: "Thank you! Message sent." });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", msg: data.message });
      }
    } catch (err) {
      setStatus({
        type: "error",
        msg: "Could not send message. Try again later.",
      });
    }
  };

  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          required
        />
        <button type="submit">Send Message</button>
        {status.msg && (
          <div className={`form-status ${status.type}`}>{status.msg}</div>
        )}
      </form>
      <div className="contact-socials">
        <a href="mailto:syeddmeerankhan@gamil.com">Email</a>
        <a
          href="https://github.com/SyedMeeranKhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/syed-meeran-khan-9b0a56259/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
