import { types } from "../types/types"

const initialState = {
    events: [ {
        id: 5,
        title: 'Conference',
        start: new Date(2021, 6, 11),
        end: new Date(2021, 6, 13),
        desc: 'Big conference for important people',
        user: {
          name : "Huguez"
        }
      } ],
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
            return {
                ...state,
                events: [ ...state.events.push( action.payload )]
            }
        default: 
            return state
    }
}