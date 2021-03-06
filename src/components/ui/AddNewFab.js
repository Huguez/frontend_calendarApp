import React from 'react'
import { useDispatch } from "react-redux";


import { uiOpenModal } from '../../actions/ui';

export const AddNewFab = () => {
    const dispatch = useDispatch()

    const handleNewEvent = () => {

        dispatch( uiOpenModal() )
    }
    
    return (
        <button className="btn btn-primary fab"  onClick={ handleNewEvent }> 
            <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
    )
}
