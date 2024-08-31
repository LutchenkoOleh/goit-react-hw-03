import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm"
import ContactList from "../ContactList/ContactList"
import SearchBox from "../SearchBox/SearchBox"

export default function App() {


  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]
  )

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');

    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);


  const [filter, setFilter] = useState("");

  const handleFilterChange = (value) => { setFilter(value) };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));

  const handleDeleteContact = (id) =>
    setContacts(contacts.filter(contact => contact.id !== id))

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => { return [...prevContacts, newContact] })
  };


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </div>

  )
}