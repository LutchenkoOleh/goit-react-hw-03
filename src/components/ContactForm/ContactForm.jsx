import "./ContactForm.css"
import { useId } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";


export default function ContactForm({ onAddContact }) {

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().email("Must be a valid number!").required("Required")
  });




  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: "",
    number: ""
  }


  const handleSubmit = (value, actions) => {
    if (value.name && value.number) {
      onAddContact({ id: Date.now().toString(), ...value });
      actions.resetForm();

    }
  }




  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}>
      <Form  >
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          type="text"
          name="name"
          placeholder="Name"
          id={nameFieldId}
        />
        <label htmlFor={numberFieldId}>Number</label>
        <Field
          type="text"
          name="number"
          placeholder="Number"
          id={numberFieldId}
        />
        <button type="submit" >Add contact</button>
      </Form>
    </Formik >
  );


}