import mongoose from 'mongoose';

const dbURI = process.env.DB_URI;
let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  isConnected = true;
}

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectDB();
      const { name, email, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Missing form data.' });
      }

      const newContact = new Contact({ name, email, message });
      await newContact.save();
      return res.status(200).json({ success: true, message: 'Thank you! Message sent.' });
    } catch (error) {
      console.error('Error saving to database:', error);
      return res.status(500).json({ success: false, message: 'Database error.' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
