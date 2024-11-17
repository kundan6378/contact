import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactsTable from './components/ContactsTable';
import { getContacts, addContact, updateContact, deleteContact } from './api';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    getContacts().then(setContacts);
  }, []);

  const handleAddContact = async (contact) => {
    const newContact = await addContact(contact);
    setContacts([...contacts, newContact]);
  };

  const handleDeleteContact = async (id) => {
    await deleteContact(id);
    setContacts(contacts.filter(contact => contact._id !== id)); // Use _id to match MongoDB's object id
  };

  const handleEditContact = async (updatedContact) => {
    const updated = await updateContact(updatedContact._id, updatedContact); // Use _id
    setContacts(contacts.map(contact => contact._id === updated._id ? updated : contact));
    setEditingContact(null); // Clear the editing contact after update
  };

  const startEditing = (contact) => {
    setEditingContact(contact); // Set the contact to be edited
  };

  return (
    <div>
      <ContactForm 
        onSubmit={editingContact ? handleEditContact : handleAddContact} 
        editingContact={editingContact} 
      />
      <ContactsTable 
        contacts={contacts} 
        onEdit={startEditing} 
        onDelete={handleDeleteContact} 
      />
    </div>
  );
}

export default App;
