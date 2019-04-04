
export function changeMapDirection(record) {
    return dispatch => {
                dispatch({
                    type: "CHANGE_MAP_DIRECTION",
                    payload: record
                });

    }
}
