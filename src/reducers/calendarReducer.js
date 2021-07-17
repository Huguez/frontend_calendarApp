import { types } from "../types/types"
import { events as e } from '../evets/event'

const initialState = {
    events: [ ...e ],
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
        default: 
            return state
    }
}