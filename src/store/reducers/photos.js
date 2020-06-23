
import { GET_PHOTOS, GET_MORE_PHOTOS } from 'constants/actionTypes';
  
const initialState = {
  photos: {
    total: 0,
    total_pages: 0,
    results: [],
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: Object.assign({},payload)
      };
    case GET_MORE_PHOTOS:
      return {
        ...state,
        photos: {
          ...payload,
          results: [...state.photos.results, ...payload.results ]
        }
      };
    default:
      return state;
  }
};