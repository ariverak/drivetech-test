
import { TOGGLE_THEME_MODE } from 'constants/actionTypes';
  
const initialState = {
  ui: {
    mode: 'light'
  }
}

export default (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_THEME_MODE:
      return {
        ...state,
        ui: {
          ...state.ui,
          mode: state.ui.mode === 'light' ? 'dark' : 'light'
        }
      };
    default:
      return state;
  }
};