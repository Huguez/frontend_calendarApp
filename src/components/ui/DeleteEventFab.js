import React from 'react'
import { useDispatch } from "react-redux";

import { eventDeleteEvent } from '../../actions/events'

export const DeleteEventFab = () => {

    const dispatch = useDispatch()
    
    const handleDelete = () => {
        dispatch( eventDeleteEvent() )
    }

    return (
        <button className="btn btn-danger fab-danger"  onClick={ handleDelete }> 
            <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
    )
}
