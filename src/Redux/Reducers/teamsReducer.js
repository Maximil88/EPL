import {FETCH_TEAMS } from "../ActionTypes";

const initialState = {
  data: null
};


function teamsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TEAMS: {
      return Object.assign({}, state, {
        ...state,
        data: {...state.results,...action.data}
      })
    }
    default:
      return state;
  }
}

export default teamsReducer;