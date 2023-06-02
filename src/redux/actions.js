import axios from "axios";

const API_URL = 'https://ringsdb.com/api/public/cards/core.json'; // for easiness core only
// const API_KEY = 'fda265e41e2cbe467bbc350eae5a5d45';
// const PARAMS = 'page=1';
const BASE_URL = `${API_URL}` // ?api_key=${API_KEY}&${PARAMS}`;

export const getCards = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${BASE_URL}`);
      if (res.data) {
        dispatch({
          type: GET_CARDS,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};

export const GET_CARDS = 'GET_CARDS';