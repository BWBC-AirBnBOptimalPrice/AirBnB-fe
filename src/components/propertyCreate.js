import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function PropertyCreate(props) {
  const { touched, errors } = props;
  return (
    <Form className="propertyCreate">
      <label htmlFor="address">Address:</label>
      <Field name="address" />
      {touched.address && errors.address ? (
        <span className="error">{errors.address}</span>
      ) : null}
      <label htmlFor="city">City:</label>
      <Field name="city" />
      {touched.city && errors.city ? (
        <span className="error">{errors.city}</span>
      ) : null}
      <label htmlFor="state">State:</label>
      <Field name="state" />
      {touched.state && errors.state ? (
        <span className="error">{errors.state}</span>
      ) : null}
      <label htmlFor="zip">Zip:</label>
      <Field name="zip" />
      {touched.zip && errors.zip ? (
        <span className="error">{errors.zip}</span>
      ) : null}
      <label htmlFor="description">Property Description</label>
      <Field name="description" />
      {touched.description && errors.description ? (
        <span className="error">{errors.description}</span>
      ) : null}
      <label>
        Children Allowed?
        <Field type="checkbox" name="children_allowed" />
        {touched.children_allowed && errors.children_allowed ? (
          <span className="error">{errors.children_allowed}</span>
        ) : null}
      </label>
      <label htmlFor="property_type">Property Type:</label>
      <select name="property_type" type="select">
        <option value="null">select type</option>
        <option value="apartment">apartment</option>
        <option value="house">house</option>
      </select>
      {touched.property_type && errors.property_type ? (
        <span className="error">{errors.property_type}</span>
      ) : null}
      <label htmlFor="floor_number">Number of floors:</label>
      <Field name="floor_number" />
      {touched.floor_number && errors.floor_number ? (
        <span className="error">{errors.floor_number}</span>
      ) : null}
      <label htmlFor="bathrooms_number">Number of bathrooms</label>
      <Field name="bathrooms_number" />
      {touched.bathrooms_number && errors.bathrooms_number ? (
        <span className="error">{errors.bathrooms_number}</span>
      ) : null}
      <label htmlFor="bedrooms_number">Number of bedrooms</label>
      <Field name="bedrooms_number" />
      {touched.bedrooms_number && errors.bedrooms_number ? (
        <span className="error">{errors.bedrooms_number}</span>
      ) : null}
      <label htmlFor="amenities">
        Amenities (please seperate with a comma)
      </label>
      <Field type="textarea" name="amenities" />
      {touched.amenities && errors.amenities ? (
        <span className="error">{errors.amenities}</span>
      ) : null}

      <button type="submit" disabled={!props.isValid}>
        Submit home!
      </button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues: props => {
    return {
      address: props.address || "",
      city: props.city || "",
      state: props.state || "",
      zip: props.zip || "",
      description: props.description || "",
      children_allowed: props.children_allowed || false,

      property_type: props.property_type || "",
      floor_number: props.floor_number || 1,
      bathrooms_number: props.bathrooms_number || 1,
      bedrooms_number: props.bedrooms_number || 1,
      amenities: props.amenities || ""
    };
  },
  validationSchema: Yup.object().shape({
    address: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    zip: Yup.string().required(),
    description: Yup.string().required(),
    children_allowed: Yup.boolean(),
    property_type: Yup.string()
      .required()
      .oneOf(["apartment", "house"], "Please select property type"),
    floor_number: Yup.number(),
    bathrooms_number: Yup.number(),
    bedrooms_number: Yup.number(),
    amenities: Yup.string()
  }),
  handleSubmit: (values, formikBag) => {
    console.log(values);
    formikBag.setStatus("Submitting Home!");
    formikBag.resetForm();
  }
})(PropertyCreate);
