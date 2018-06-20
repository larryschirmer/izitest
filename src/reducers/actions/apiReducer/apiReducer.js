import axios from 'axios';
import { filterResults, wait } from '../../helperFunctions';

const GET_API_DATA = 'get-api-data';
const REMOVE_API_DATA = 'remove-api-data';
const URL = 'https://dev.requiemapp.com/public/memorial/random';

export const fetchFromAPI = () => {
  return async dispatch => {
    try {
      dispatch({ type: REMOVE_API_DATA });

      await wait(1500);

      const { data } = await axios.get(URL);

      const filteredData = filterResults(data);
      dispatch({ type: GET_API_DATA, payload: filteredData });
    } catch (e) {
      // handle error
    }
  };
};

const initialState = {
  fetchState: 'ready',
  data: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_API_DATA:
      return { fetchState: 'ready', data: payload };

    case REMOVE_API_DATA:
      return { fetchState: 'loading', data: [] };

    default:
  }
  return state;
};
