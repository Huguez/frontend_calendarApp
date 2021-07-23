import { types } from "../types/types"
import { fetchSinToken } from '../helpers/fetch'

export const startLogin = ( email, password ) => {
    return async ( dispatch ) => {
        
        const resp = await fetchSinToken( 'auth', { email, password }, 'POST' );
        const { ok, user, token } = await resp.json();
        if( ok ){
            localStorage.setItem( 'token', token )
            localStorage.setItem( 'token-init-date', new Date().getTime() )
            dispatch( login( user ) )
        }
    }
}

const login = ( {  _id, name } ) => ({
    type: types.authLogin,
    payload: {  _id, name }
})