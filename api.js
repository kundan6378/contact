import axios from 'axios';

const BASE_URL = 'http://localhost:5000/contacts';

export const getContacts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addContact = async (contact) => {
  const response = await axios.post(BASE_URL, contact);
  return response.data;
};

export const updateContact = async (id, contact) => {
  const response = await axios.put(`${BASE_URL}/${id}`, contact);
  return response.data;
};

export const deleteContact = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};
