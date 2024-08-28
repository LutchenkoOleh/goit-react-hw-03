import "./ContactList.css"
import Contacts from "./Contacts"

export default function ContactList({ contacts }) {
  return (
    <div>
      <ul className="contact-list">
        {contacts.map(contact => (
          <Contacts key={contact.id} name={contact.name} number={contact.number} />))}

      </ul>
    </div>
  )
}