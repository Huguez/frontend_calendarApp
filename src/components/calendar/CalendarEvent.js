import React from 'react'

export const CalendarEvent = ( { event } ) => {
    // console.log( event )
    return (
        <div>
            { event.title }
            <strong> { event.user.name } </strong>
        </div>
    )
}
