import { types } from "../types/types"
import { fetchSinToken } from '../helpers/fetch'
import Swal from "sweetalert2";

export const startLogin = ( email, password ) => {
    return async ( dispatch ) => {
        
        const resp = await fetchSinToken( 'auth', { email, password }, 'POST' );
        const body = await resp.json();
        if( body.ok ){
            localStorage.setItem( 'token', body.token )
            localStorage.setItem( 'token-init-date', new Date().getTime() )
            dispatch( login( body.user ) )
        }else{
            if( !!body.msg ){
                Swal.fire( 'Error', body.msg , 'warning' );
            }else{
                Swal.fire( 'Error', (body.errors.email) ? body.errors.email.msg : body.errors.password.msg , 'warning' );
            }
        }
    }
}

export const startRegister = ( email, name, password  ) => {
    return async ( dispatch ) => {
        
        const resp = await fetchSinToken( 'auth/new', { email, name, password }, 'POST' );
        const body = await resp.json();

        if( body.ok ){
            localStorage.setItem( 'token', body.token )
            localStorage.setItem( 'token-init-date', new Date().getTime() )
            dispatch( register( body.user ) )
        }else{
            if( !!body.msg ){
                Swal.fire( 'Error', body.msg , 'warning' );
            }else{
                Swal.fire( 'Error', ( body.errors.name ) ? body.errors.name.msg : 
                (body.errors.email) ? body.errors.email.msg : body.errors.password.msg , 'warning' );
            }
        }
    }   
}

const register = ( {  _id, name } ) => ({
    type: types.authRegister,
    payload: {  _id, name }
})

const login = ( {  _id, name } ) => ({
    type: types.authLogin,
    payload: {  _id, name }
})