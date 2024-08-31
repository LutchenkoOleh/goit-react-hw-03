import formCss from "./ContactForm.module.css"
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";


export default function ContactForm({ onAddContact }) {

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    number: Yup.string()
      .matches(/^[0-9\-]+$/, "Must be a valid number!")
      .min(5, "Too Short!")
      .max(15, "Too Long!")
      .required("Required")
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: "",
    number: ""
  }


  const handleSubmit = (values, actions) => {
    if (values.name && values.number) {
      onAddContact({ id: Date.now().toString(), ...values });
      actions.resetForm();

    }
  }


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}>
      <Form className={formCss.form} >
        <div>
          <label
            className={formCss.formLabel}
            htmlFor={nameFieldId}>Name</label>
          <Field
            className={formCss.formText}
            type="text"
            name="name"
            placeholder="Name"
            id={nameFieldId}
          />
          <ErrorMessage
            className={formCss.error}
            name="name"
            component="div"
          />
        </div>
        <div>
          <label
            className={formCss.formLabel}
            htmlFor={numberFieldId}>Number</label>
          <Field
            className={formCss.formText}
            type="text"
            name="number"
            placeholder="Number"
            id={numberFieldId}
          />
          <ErrorMessage
            className={formCss.error}
            name="number"
            component="div"
          />
        </div>
        <button className={formCss.formButton} type="submit" >Add contact</button>
      </Form>
    </Formik >
  );


}