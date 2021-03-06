import { GET_PHOTOS, GET_MORE_PHOTOS, RESET_PHOTOS } from 'constants/actionTypes';
import unsplash from 'services/unsplash';

export function getPhotos(query) {
    return async (dispatch) => {
        const { data } = await unsplash.get('search/photos',{
            params: {
                query
            }
        })
        return dispatch({
            type: GET_PHOTOS,
            payload: data
        });
    };
}

export function getMorePhotos(query,page) {
    return async (dispatch) => {
        const { data } = await unsplash.get('search/photos',{
            params: {
                query,
                page
            }
        })
        return dispatch({
            type: GET_MORE_PHOTOS,
            payload: data
        });
    };
}

export function resetPhotos() {
    return async (dispatch) => {
        return dispatch({
            type: RESET_PHOTOS,
            payload: []
        });
    };
}