import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
//import axios from "axios";

function PropertyView(props) {

  /*useEffect(
    axios
      .get("https://lambda-airbnb.herokuapp.com")
      .then(response => {
        console.log(response);
        setProperties(response);
      })
      .catch(err => console.log(err))
  );*/

  return (
    <div className="properties">
      {props.properties.map(home => (
        <div className="propertyCard">
          <div className="address">
            <h2>{home.address}</h2>
            <h3>{home.city}</h3>
            <h3>
              {home.state}, {home.zip}
            </h3>
          </div>
          <div className="propertyStats">
            <p>{home.property_type}</p>
            <p>floors: {home.floor_number}</p>
            <p>
              B/B: {home.bedrooms_number}/{home.bathrooms_number}
            </p>

            {home.children_allowed === true ? (
              <p>Childrean are welcome!</p>
            ) : (
              <p>No kids please!</p>
            )}
          </div>
          <p>Descripton: {home.descripton}</p>
          <p>Amenities: {home.amenities}</p>
          <p>{home.price}</p>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    properties: state.properties
  }
}

export default connect(mapStateToProps)(PropertyView);
