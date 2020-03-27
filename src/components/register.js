import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function Register(props) {
  const { touched, errors} = props;
  return (
    <Form className = "registerForm">
      <label htmlFor = "firstName">First Name:</label>
      <Field name="firstName" placeholder="First Name" />
      {touched.firstName && errors.firstName ? (
        <span className="error">{errors.firstName}</span>
      ) : null}
      <label htmlFor = "lastName">Last Name:</label>
      <Field name="lastName" placeholder="Last Name" />
      {touched.lastName && errors.lastName ? (
        <span className="error">{errors.lastName}</span>
      ) : null}
      <label htmlFor = "password">Password:</label>
      <Field name="password" placeholder="Password" />
      {touched.password && errors.password ? (
        <span className="error">{errors.password}</span>
      ) : null}
      <label htmlFor = "email">Email:</label>
      <Field name="email" placeholder="Email" />
      {touched.email && errors.email ? (
        <span className="error">{errors.email}</span>
      ) : null}
      <button type="submit" disabled={!props.isValid}>
        Register!
      </button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues: props => {
    return {
      firstName: props.firstName || "",
      lastName: props.lastName || "",
      password: props.password || "",
      email: props.email || ""
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("Please provide your first name."),
    lastName: Yup.string().required("Please provide your last name."),
    password: Yup.string().required("Please set your password."),
    email: Yup.string()
      .email("Email must be valid!")
      .required("Please provide an email.")
  }),
  handleSubmit: (values, formikBag) => {
    console.log(values);
    axiosWithAuth()
    .post('/auth/register', values)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
    formikBag.setStatus("Form Submitting!");
    formikBag.resetForm();
  }
})(Register);
