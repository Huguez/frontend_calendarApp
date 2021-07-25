import { types } from "../types/types"
// import { events as e } from '../evets/event'

const initialState = {
    events: [],
    activeEvent: null
}

export const calendarReducer = ( state = initialState, action ) => {
    switch( action.type ){
        case types.eventSetActive:
            return { 
                ...state,
                activeEvent: action.payload
            }
        case types.eventAddNew:
            const arreglo = [ ...state.events ]
            arreglo.push( action.payload )

            return {
                ...state,
                events: [ ...arreglo ]
            }
        case types.eventClearActiveEvent:
            return{
                ...state,
                activeEvent: null
            }
        case types.eventUpdate:
            return {
                ...state,
                events: state.events.map( e => ( e.id === action.payload.id ) ? action.payload : e )
            }
        case types.eventDeleteEvent:
            return {
                ...state,
                events: state.events.filter( e => e.id !== state.activeEvent.id ),
                activeEvent : null
            }
        case types.eventLoaded:
            return {
                ...state,
                events: [ ... action.payload ]
            }
        default: 
            return state
    }
}