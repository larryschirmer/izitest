import { sortTypes, sortDirections } from './sortValues';
import toggleValue from './toggleValue';

const SORT_TYPE = 'sort-type';
const SORT_DIRECTION = 'sort-direction';

export const updateType = () => {
  return async dispatch => {
    try {
      dispatch({ type: SORT_TYPE });
    } catch (e) {
      // handle error
    }
  };
};

export const updateDirection = () => {
  return async dispatch => {
    try {
      dispatch({ type: SORT_DIRECTION });
    } catch (e) {
      // handle error
    }
  };
};

const initialState = {
  type: {
    id: 'creation-date',
    text: 'Sort by Creation Date',
  },
  direction: {
    id: 'assending',
    text: 'Sort Assending',
  },
};
export default (state = initialState, { type }) => {
  switch (type) {
    case SORT_TYPE:
      return { ...state, type: toggleValue(sortTypes, state.type) };

    case SORT_DIRECTION:
      return { ...state, direction: toggleValue(sortDirections, state.direction) };

    default:
  }
  return state;
};
