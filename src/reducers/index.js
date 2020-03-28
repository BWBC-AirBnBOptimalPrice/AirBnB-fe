import {
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  CREATE_PROPERTY_START,
  CREATE_PROPERTY_SUCCESS,
  CREATE_PROPERTY_FAILURE
} from "../actions";

export const initialState = {
  isLoading: false,
  isLoggedIn: true,
  error: null,
  properties: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_START:
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
        error: null
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: null
      };
    case USER_REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload
      };
    case CREATE_PROPERTY_START:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case CREATE_PROPERTY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        properties: action.payload
      }
    case CREATE_PROPERTY_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        }
    default:
      return state;
  }
};
