const mongoose = require('mongoose');

const dbURI = process.env.DB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// Export default handler
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Missing form data.' });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(200).json({ success: true, message: 'Thank you! Message sent.' });

  } catch (error) {
    console.error('Error saving to database:', error);
    res.status(500).json({ success: false, message: 'Database error.' });
  }
}
