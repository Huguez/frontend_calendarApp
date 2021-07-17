import React, { useState } from 'react'

import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import 'moment/locale/es-mx'

import { messages } from '../../helpers/calendar-messages'
import { events } from '../../evets/event'
import { Navbar } from '../ui/Navbar'
import { CalendarEvent } from './CalendarEvent';

moment.locale('es')

export const CalendarScreen = () => {

    const [lastView, setLastView] = useState( localStorage.getItem( 'lastView' ) || 'mouth' )

    const onDoubleClick = ( e ) => alert( e )

    const onSelect = ( e )=>{
        console.log( e )
    }

    const onViewChange = ( e ) =>{
        setLastView( e )
        localStorage.setItem( 'lastView', e )
    }

    const localizer = momentLocalizer( moment ); // or globalizeLocalizer

    const eventStyleGetter = ( e, start, end, isSelected ) => {
        
        const style = {
            backgroundColor: '#367cf7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'black',
            border: '0px',
            display: 'block'
        };

        return { style };
    
    }

    return (
        <div >
            <Navbar />
            <div className="mt-3 container-fluid " style={{ height: '40vw'}  }>

                <Calendar 
                    localizer={localizer} 
                    startAccessor="start" 
                    endAccessor="end" 
                    messages={ messages }
                    events={ events }
                    onSelectEvent={ onSelect }
                    onView={ onViewChange }
                    onDoubleClickEvent={ onDoubleClick }
                    eventPropGetter={ eventStyleGetter }
                    components={{ event: CalendarEvent }}
                    view={ lastView }
                />

            </div>
        </div>
    )
}
