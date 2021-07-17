import React from 'react'

import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import { events } from '../../evets/event'
import { Navbar } from '../ui/Navbar'

export const CalendarScreen = () => {

    const localizer = momentLocalizer( moment ); // or globalizeLocalizer

    const misEventos = {
        title: 'algo',
        start: moment().toDate(),
        end: moment().add( 2, 'hour' ).toDate(),
        bgcolor: '#fafafa'
    }
    

    events.push( misEventos )

    return (
        <div >
            <Navbar />
            <div className="mt-3 container " style={{ height: '560px'}  }>

                <Calendar 
                    localizer={localizer} 
                    startAccessor="start" 
                    endAccessor="end" 
                    
                    events={ events } />

            </div>
        </div>
    )
}
