import * as types from "../actions/index";

const initialState = {
  characters: [],
  error: null,
  fetching: false,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING:
      return {...state, fetching: true };
    case types.SUCCESS:
      return {...state, characters: action.payload, fetching: false };
    case types.FAILURE: 
      return {...state, error: action.payload, fetching: false };
    default:
      return state;
  }
};
