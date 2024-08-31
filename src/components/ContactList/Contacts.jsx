import css from "./ContactList.module.css"

export default function Contacts({ name, number, onDelete }) {
  return (
    <li className={css.contactItem}>
      <div className={css.contactItemWrap}>
        <p className={css.contactText}>
          <svg className={css.nameSvg} width="12" height="12">
            <use href="/src/img/phone.svg#name"></use>
          </svg>
          {name}
        </p>
        <p className={css.contactText}>
          <svg className={css.numberSvg} width="12" height="12">
            <use href="/src/img/phone.svg#number"></use>
          </svg>
          {number}
        </p>
      </div>
      <button className={css.contactButton} onClick={onDelete} >Delete</button>
    </li>)
}