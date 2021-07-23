import { types } from "../types/types"

export const startLogin = ( email, pass ) => {
    return async ( dispatch ) => {
        console.log( email, pass )
        dispatch( login( email, pass ) )
    }
}

export const login = ( email, pass ) => ({
    type: types.authLogin,
    payload: { email, pass } 
})