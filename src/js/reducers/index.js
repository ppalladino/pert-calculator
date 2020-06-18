import { ADD_ESTIMATE } from "../constants/action-types";


const initialState = {
    estimates: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ESTIMATE) {
        state.estimates.push(action.payload);
      }
    return state;};

export default rootReducer;
