const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  company: String,
  jobTitle: String,
});

module.exports = mongoose.model('Contact', contactSchema);
