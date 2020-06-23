import { GET_ALL_PHOTOS } from 'constants/actionTypes';
import unsplash from 'services/unsplash';

export function getAllPhotos(query) {
    return async (dispatch) => {
        const { data } = await unsplash.get('search/photos',{
            params: {
                query
            }
        })
        dispatch({
            type: GET_ALL_PHOTOS,
            payload: data
        });
    };
}