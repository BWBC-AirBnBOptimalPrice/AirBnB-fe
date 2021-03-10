import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';

import { createProperty } from '../actions';

const CreateProperty = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        props.createProperty(data);
        console.log(data);
        console.log(errors);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className = "homecv">
        <input type="text" placeholder="Address" name="address" ref={register({required: true})} />
        <input type="text" placeholder="City" name="city" ref={register({required: true})} />
        <input type="text" placeholder="State" name="state" ref={register({required: true, min: 2})} />
        <input type="number" placeholder="Zip" name="zip" ref={register({required: true})} />
        <input type="text" placeholder="Property Description" name="description" ref={register({required: true})} />
        <label>Children Allowed?
            <input type="checkbox" placeholder="Children Allowed?" name="children_allowed" ref={register} />
        </label>
        <select name="property_type" ref={register({ required: true })}>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
        </select>
        <input type="number" placeholder="Number of Bedrooms" name="bedrooms_number" ref={register({required: true})} />
        <input type="number" placeholder="Number of Bathrooms" name="bathrooms_number" ref={register({required: true})} />
        <label>Amenities (separate by commas)
            <textarea name="amenities" ref={register} />
        </label>
        <input type="submit" />
      </form>
    )
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps, {createProperty})(CreateProperty);