import axios from 'axios';

const Type = 'type';

export const fetchFromAPI = () => {
  return async dispatch => {
    try {
      // fetch data
    } catch ({ response }) {
      // handle error
    }
  };
};

const initialState = {
  todos: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Type:
      return { ...state };

    default:
  }
  return state;
};
