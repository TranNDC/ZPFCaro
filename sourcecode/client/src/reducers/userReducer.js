import { INIT_USER, LOAD_USERINFO } from "../actions/userAction";

import { initState } from "../utils/userUtils";

const initialState = initState();

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_USER:
      return state;
    case LOAD_USERINFO:
      return state;
    default:
      return state;
  }
};

export default userReducer;

 