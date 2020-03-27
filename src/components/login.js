import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function Login(props) {
    const { touched, errors} = props;
  return (
    <Form className="loginForm">
      <label htmlFor="email">Email:</label>
      <Field name="email" placeholder="Email" />
      {touched.email && errors.email ? (
        <span className="error">{errors.email}</span>
      ) : null}

      <label htmlFor="password">Password:</label>
      <Field name="password" placeholder="Password" />
      {touched.password && errors.password ? (
        <span className="error">{errors.password}</span>
      ) : null}


      <button type="submit" disabled={!props.isValid}>
        Login!
      </button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues: props => {
    return {
      email: props.email || "",
      password: props.password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email must be valid!")
      .required("Please provide an email."),
    password: Yup.string().required("Please provide your password.")
  }),
  handleSubmit: (values, formikBag) => {
    console.log(values);
    formikBag.setStatus("Logging in!");
    formikBag.resetForm();
  }
})(Login);
