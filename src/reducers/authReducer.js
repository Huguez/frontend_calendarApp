import { types } from "../types/types";

const initialState = {
    checking: true,
    // uid: null,
    // name: 'username',
    // token: : null
}


export const authReducer = ( state = initialState, action ) => {
    switch( action.type ){
        case types.authLogin:

            return state;

        default: return state
    }
}