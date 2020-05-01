const INITIAL_STATE = {
  currentUser: null,
};

// what state to return
const userReducer = (state = INITIAL_STATE, action) => {
  // check the action type to see if there's a match, if no match, default is to return the state
  switch (action.type) {
    case 'SET_CURRENT_USER':
      // return a new object, new state
      return {
        ...state,
        currentUser: action.payload,
      };

    // if none of the action matches, then just return the state
    default:
      return state;
  }
};

export default userReducer;
