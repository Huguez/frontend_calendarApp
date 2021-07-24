import { types } from "../types/types"
import { fetchSinToken, fetchToken } from '../helpers/fetch'
import Swal from "sweetalert2";


// ASYNCronas ////////////////////////////////////

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

export const startChecking = () => {
    return async ( dispatch ) => {
        
        const resp = await fetchToken( 'auth/renew' );
        const body = await resp.json();

        if( body.ok ){
            localStorage.setItem( 'token', body.token )
            localStorage.setItem( 'token-init-date', new Date().getTime() )
            const {  _id, name } = body;
            dispatch( login( { _id, name } ) )
        }else{
            dispatch( checkingFinish() )
        }
    }
}

export const startLogout = () => {
    return async ( dispatch ) => {
        localStorage.clear();
        dispatch( logout() )
    }
}



/// Syncronas  ////////////////////////////////////

const logout = () =>({
    type: types.authLogout
})

const checkingFinish = () => ({
    type: types.authCheckingFinish
})

const register = ( {  _id, name } ) => ({
    type: types.authRegister,
    payload: {  _id, name }
})

const login = ( {  _id, name } ) => ({
    type: types.authLogin,
    payload: {  _id, name }
})