
import { GET_PHOTOS, GET_MORE_PHOTOS, RESET_PHOTOS } from 'constants/actionTypes';
  
const initialState = {
  total: 0,
  total_pages: 0,
  results: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PHOTOS:
      return {
        ...state,
        ...payload
      }
    case GET_MORE_PHOTOS:
      return {
          ...state,
          results: [...state.results, ...payload.results ]
        };
    case RESET_PHOTOS:
      return {
          ...state,
          ...initialState
        };
    default:
      return state;
  }
};