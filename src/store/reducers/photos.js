
import { GET_PHOTOS, GET_MORE_PHOTOS } from 'constants/actionTypes';
  
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
    default:
      return state;
  }
};