
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Swal from 'sweetalert2'

import Modal from 'react-modal'
import './CalendarModal.css'
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import { uiCloseModal } from '../../actions/ui'
import { startNewEvent, eventClearActiveEvent, startEventUpdate } from '../../actions/events'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const initEvent = { 
    title: '',
    notes: '', 
    start: moment().minute(0).second(0).toDate(),
    end:   moment().minute(0).second(0).add( 1,'hours' ).toDate()
}


export const CalendarModal = ( ) => {
    
    const dispatch = useDispatch()
    const { ui:{ modalOpen }, calendar:{ activeEvent } } = useSelector( state => state )
    
    const [ formValue, setFormValue ] = useState( initEvent )
    
    const { title, notes, start, end } = formValue 

    useEffect( () => {
        if( activeEvent ){
            setFormValue( activeEvent )
        }else{
            setFormValue( initEvent )
        }
    }, [ activeEvent, setFormValue ] )


    const handleInputChange = ( { target } ) => {
        setFormValue( {
            ...formValue, 
            [target.name]: target.value
        } )
    }

    function closeModal() {
        setFormValue( initEvent )
        dispatch( uiCloseModal() )
        dispatch( eventClearActiveEvent() )
        setStartDate( moment().minute(0).second(0).toDate() )
        setEndDate( moment().minute(0).second(0).add( 1,'hours' ).toDate() )
    }
    
    const [startDate, setStartDate] = useState( start )
    
    const handleStartDateChange = ( e ) => {
        setStartDate( e )
        setFormValue( {
            ...formValue, 
            start: e
        } )
    }
    
    const [endDate, setEndDate] = useState( end )
    
    const handleEndDateChange = ( e ) => {
        setEndDate( e )
        setFormValue( {
            ...formValue, 
            end: e
        } )
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        
        const momentStart = moment( start )
        const momentEnd = moment( end )
        
        if( momentStart.isSameOrAfter( momentEnd ) ){
            Swal.fire( {
                title: 'Error!',
                text: 'La Fecha Final Tiene Que Ser Superior',
                icon: 'error',
            } );
            return;
        }
        
        if( !title ){
            
            Swal.fire( {
                title: 'Error!',
                text: 'Falta El Titulo',
                icon: 'error',
            } );
            return;
        }

        if( !notes ){
            console.log("falta las notas")
            Swal.fire( {
                title: 'Error!',
                text: 'Falta Las Notas',
                icon: 'error',
            } );
            return;
        }

        if( !activeEvent ){
            dispatch( startNewEvent( { ...formValue } ) )
        }else{
            dispatch( startEventUpdate( formValue ) )
        }
        
        closeModal()
    }


    return (
        <div>
            <Modal 
                isOpen={ modalOpen }
                
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={ 200 }
                className="modal"
                overlayClassName="modal-fondo"
            >
                <h1> { activeEvent ? "Editando Evento": "Nuevo Evento" } </h1>
                <hr />
                <form className="container" onSubmit={ handleSubmit } >
                    <div className="form-group">
                        <label>Fecha y hora inicio</label>
                        {/* <input className="form-control" placeholder="Fecha inicio" /> */}
                        <DateTimePicker className="form-control"  
                            value={ startDate }
                            onChange={ handleStartDateChange} />
                    </div>

                    <div className="form-group">
                        <label>Fecha y hora fin</label>
                        <DateTimePicker className="form-control"  
                            value={ endDate }
                            minDate={ startDate }
                            onChange={ handleEndDateChange } />
                    </div>

                    <hr />
                    <div className="form-group">
                        <label>Titulo y notas</label>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="T??tulo del evento"
                            name="title"
                            value={ title }
                            autoComplete="off"
                            onChange={ handleInputChange }
                        />
                        <small id="emailHelp" className="form-text text-muted">Una descripci??n corta</small>
                    </div>

                    <div className="form-group">
                        <textarea 
                            type="text" 
                            className="form-control"
                            placeholder="Notas"
                            rows="5"
                            value={ notes }
                            name="notes"
                            onChange={ handleInputChange }
                        ></textarea>
                        <small id="emailHelp" className="form-text text-muted">Informaci??n adicional</small>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                    >
                        <i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>

                </form>
            </Modal>
        </div>
    )
}
