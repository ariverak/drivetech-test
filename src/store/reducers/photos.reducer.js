
import { GET_ALL_PHOTOS } from 'constants/actionTypes';
  
const initialState = {
  photos: {
    results: []
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PHOTOS:
      return {
        ...state,
        photos: Object.assign({}, payload)
      };
    default:
      return state;
  }
};