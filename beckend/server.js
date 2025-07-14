require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const dbURI = process.env.DB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define Schema and Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// API Endpoint for Form Submission
app.post('/submit-form', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Missing form data.' });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.json({ success: true, message: 'Thank you! Message sent.' });
  } catch (error) {
    console.error('Error saving to database:', error);
    res.status(500).json({ success: false, message: 'Database error.' });
  }
});

// Optional: Add a GET route to avoid "Cannot GET" error during development
app.get('/submit-form', (req, res) => {
  res.json({ message: 'This endpoint only accepts POST requests for form submissions.' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));