import * as map from '../const/map';

export function changeMapDirection(record) {
    return dispatch => {
                dispatch({
                    type: map.CHANGE_MAP_DIRECTION,
                    payload: record
                });

    }
}
