import { INIT_USER } from "../actions/userAction";

import { initState } from "../utils/userUtils";

const initialState = initState();

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_USER:
      return state;
    default:
      return state;
  }
};

export default userReducer;
