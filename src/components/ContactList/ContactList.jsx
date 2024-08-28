import "./ContactList.css"
import contacts from "./contacts.json"
import Contacts from "./Contacts"

export default function ContactList() {
  return (
    <div>
      <ul className="contact-list">
        {contacts.map(contact => (
          <Contacts key={contact.id} name={contact.name} number={contact.number} />))}

      </ul>
    </div>
  )
}