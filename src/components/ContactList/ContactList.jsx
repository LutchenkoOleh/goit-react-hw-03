import css from "./ContactList.module.css"
import Contacts from "./Contacts"

export default function ContactList({ contacts, onDeleteContact }) {



  return (
    <div>
      <ul className={css.contactList}>

        {contacts.map(contact => (
          <Contacts key={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={() =>
              onDeleteContact(contact.id)}
          />))}


      </ul>
    </div>
  )
}