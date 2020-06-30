
import { TOGGLE_THEME_MODE } from 'constants/actionTypes';
  
export function getTheme(){
  return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
}

export const initialState = {
  mode: getTheme()
}

export default (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_THEME_MODE:
      let mode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme',mode)
      return {
        ...state,
        mode: state.mode === 'light' ? 'dark' : 'light'
      };
    default:
      return state;
  }
};