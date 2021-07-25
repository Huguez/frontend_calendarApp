import { types } from "../types/types";
import { fetchToken } from '../helpers/fetch'
import { prepareEvents } from '../helpers/prepareEvents'
import Swal from "sweetalert2";
/// Asyncrons 

export const startNewEvent = ( event ) =>{
    return async ( dispatch, getState ) => {
        try{
            const resp = await fetchToken( 'event/create', event, 'POST' );
            const body = await resp.json();
            
            if( body.ok ){
                
                const { _id, name } = getState( state => state ).auth
                
                event.id = body.evento.id
                event.user = { _id, name }
                
                dispatch( eventAddNew( event ) )
            }else{
                Swal.fire( 'Error', body.msg, 'warning' )
            }
        }catch( error ){
            console.log( "StartNewEvent: ", error )
        }
    }
}

export const startEventLoaded = () => {
    return async ( dispatch ) => {
        try{
            const resp = await fetchToken( 'event/getEvents' )
            const body = await resp.json();
            
            if( body.ok ){

                const events = prepareEvents( body.eventos ) 
                
                dispatch( eventLoaded( events ) )
            }
        }catch( error ){
            console.log( error )
        }
    }
}

export const startEventUpdate = ( event ) => {
    return async ( dispatch ) => {
        try{
            const resp = await fetchToken( `event/update/${ event.id }`, event ,'PUT' )
            const body = await resp.json()
            
            if( body.ok ){
                const e = body.event;
 
                dispatch( eventUpdate( e ) )
            }else{
                Swal.fire( 'Error', body.msg, 'warning' )
            }

        }catch( error ){
            console.log( error )
        }
    }
}

export const startDeleteEvent = () => {
    return async ( dispatch, getState ) => {
        try{
            const { activeEvent:{ id } } = getState( state => state ).calendar
            
            const resp = await fetchToken( `event/delete/${ id }`, {} ,'DELETE' )
            const body = await resp.json()

            if( body.ok ){
                dispatch( eventDeleteEvent() )
            }else{
                Swal.fire( 'Error', body.msg, 'warning' )
            }
        }catch( error ){
            console.log( error )
        }
    }
}

/// syncrons //////////////////////

const eventUpdate = ( event ) => ({
    type: types.eventUpdate,
    payload: event
})

const eventLoaded = ( events ) => ({
    type: types.eventLoaded,
    payload: events
})

const eventAddNew = ( event ) => ({
    type: types.eventAddNew,
    payload: event
})

const eventDeleteEvent = () => ({
    type: types.eventDeleteEvent,
})


export const eventSetActive = ( event ) => ({
    type: types.eventSetActive,
    payload: event
})

export const eventClearActiveEvent = () => ({
    type: types.eventClearActiveEvent
})
