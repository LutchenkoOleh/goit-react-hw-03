export default function Contacts({ name, number, onDelete }) {
  return (
    <li className="contact-item">
      <div className="contact-item-wrap">
        <p className="contact-text">{name}</p>
        <p className="contact-text"> {number}</p>
      </div>
      <button className="contact-button" onClick={onDelete} >Delete</button>
    </li>)
}