import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid2 } from '@mui/material';

function ContactForm({ onSubmit, editingContact }) {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    jobTitle: '',
  });

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
    }
  }, [editingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contact);
    setContact({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      company: '',
      jobTitle: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid2 container spacing={2}>
        <Grid2 item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            variant="outlined"
            value={contact.firstName}
            onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            value={contact.lastName}
            onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            value={contact.phoneNumber}
            onChange={(e) => setContact({ ...contact, phoneNumber: e.target.value })}
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Company"
            variant="outlined"
            value={contact.company}
            onChange={(e) => setContact({ ...contact, company: e.target.value })}
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Job Title"
            variant="outlined"
            value={contact.jobTitle}
            onChange={(e) => setContact({ ...contact, jobTitle: e.target.value })}
          />
        </Grid2>
        <Grid2 item xs={12}>
          <Button fullWidth type="submit" variant="contained" color="primary">
            {editingContact ? 'Update Contact' : 'Add Contact'}
          </Button>
        </Grid2>
      </Grid2>
    </form>
  );
}

export default ContactForm;
