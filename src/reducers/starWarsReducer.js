import * as types "../actions/index";
const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return 
    case SUCCESS:
    
    case FAILURE: 

    default:
      return state;
  }
};
