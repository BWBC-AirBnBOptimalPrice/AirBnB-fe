import { axiosWithAuth } from "../utils/axiosWithAuth";



export const USER_REGISTER_START = "USER_REGISTER_START";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAILURE = "USER_REGISTER_FAILURE";

export const CREATE_PROPERTY_START = 'CREATE_PROPERTY_START';
export const CREATE_PROPERTY_SUCCESS = 'CREATE_PROPERTY_SUCCESS';
export const CREATE_PROPERTY_FAILURE = 'CREATE_PROPERTY_FAILURE';

export const registerUser = userData => dispatch => {
    dispatch({ type: USER_REGISTER_START });
    axiosWithAuth()
      .post("/auth/register", userData)
      .then(response => {
        dispatch({ type: USER_REGISTER_SUCCESS });
        localStorage.setItem("token", response.data.payload);
      })
      .catch(error => {
        dispatch({ type: USER_REGISTER_FAILURE, payload: error.data });
        console.log("Error", error);
      });
  };

  export const createProperty = propertyData => dispatch => {
    dispatch({ type: CREATE_PROPERTY_START });
    propertyData.price = '$100';
    axiosWithAuth()
      .post('/user/:id', propertyData)
      .then(response => {
        dispatch({ type: CREATE_PROPERTY_SUCCESS, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: CREATE_PROPERTY_FAILURE, payload: error.data})
      })
  }