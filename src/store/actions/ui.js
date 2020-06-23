import { TOGGLE_THEME_MODE } from 'constants/actionTypes';

export function toggleThemeMode() {
    return async (dispatch) => {
        dispatch({
            type: TOGGLE_THEME_MODE
        });
    };
}