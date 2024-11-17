import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

function ContactsTable({ contacts, onEdit, onDelete }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Company</TableCell>
          <TableCell>Job Title</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact._id}> {/* Use _id from MongoDB */}
            <TableCell>{contact.firstName}</TableCell>
            <TableCell>{contact.lastName}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.phoneNumber}</TableCell>
            <TableCell>{contact.company}</TableCell>
            <TableCell>{contact.jobTitle}</TableCell>
            <TableCell>
              <Button onClick={() => onEdit(contact)}>Edit</Button>
              <Button onClick={() => onDelete(contact._id)}>Delete</Button> {/* Use _id */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ContactsTable;
