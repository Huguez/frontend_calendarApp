import { types } from "../types/types";
import { fetchToken } from '../helpers/fetch'

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

                const events = body.eventos
                console.log( body.eventos )

                dispatch( eventLoaded( events ) )
            }
        }catch( error ){
            console.log( error )
        }
    }
}


/// syncrons //////////////////////

const eventLoaded = ( events ) => ({
    type: types.eventLoaded,
    payload: events
})

const eventAddNew = ( event ) => ({
    type: types.eventAddNew,
    payload: event
})

export const eventSetActive = ( event ) => ({
    type: types.eventSetActive,
    payload: event
})

export const eventClearActiveEvent = () => ({
    type: types.eventClearActiveEvent
})

export const eventUpdate = ( event ) => ({
    type: types.eventUpdate,
    payload: event
})

export const eventDeleteEvent = () => ({
    type: types.eventDeleteEvent,
})
