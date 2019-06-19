import * as types from "../actions/index";

const initialState = {
  characters: [],
  error: null,
  loading: false,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING:
      return {...state, loading: true };
    case types.SUCCESS:
      return {...state, characters: action.payload, loading: false };
    case types.FAILURE: 
      return {...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
