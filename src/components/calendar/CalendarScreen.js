import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import 'moment/locale/es-mx'

import { messages } from '../../helpers/calendar-messages'
import { Navbar } from '../ui/Navbar'
import { CalendarEvent } from './CalendarEvent';

import { CalendarModal } from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/events'
import { AddNewFab } from '../ui/AddNewFab';

moment.locale('es')

export const CalendarScreen = () => {
    
    const dispatch = useDispatch()
    const { events } = useSelector( state => state.calendar )

    const [lastView, setLastView] = useState( localStorage.getItem( 'lastView' ) || 'mouth' )

    const onDoubleClick = ( e ) =>{
        
        dispatch( uiOpenModal() )  
    }

    const onSelect = ( e )=>{
        dispatch( eventSetActive( e ) )
    }

    const onViewChange = ( e ) =>{
        setLastView( e )
        localStorage.setItem( 'lastView', e )
    }

    const localizer = momentLocalizer( moment );

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
        <div>
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
                
                <CalendarModal  />

                <AddNewFab />
            </div>
        </div>
    )
}
