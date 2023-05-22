// import actions
import {GET_CARDS} from './actions';

const initialState = {
  cards: [],
};

function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS:
      return {...state, cards: action.payload};
    default:
      return state;
  }
}

export default cardsReducer;