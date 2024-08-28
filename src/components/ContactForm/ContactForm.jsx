import "./ContactForm.css"
import { useId } from "react";


export default function ContactForm({ onNumber }) {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const { name, number } = form.elements;

    onNumber({
      name: name.value,
      number: number.value,
    });

    form.reset();

  };



  const nameId = useId();


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" id={nameId} />
      <input type="number" name="number" id={nameId} />
      <button type="submit">Add contact</button>
    </form>
  );


}