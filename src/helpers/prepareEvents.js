import moment from 'moment'

export const prepareEvents = ( events = [] ) => {
    return events.map( ( e ) => {
        e.start = moment( e.start ).toDate()
        e.end   = moment( e.end ).toDate()
        return e
    } )
}