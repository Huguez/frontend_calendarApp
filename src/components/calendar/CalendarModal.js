
import React, { useState } from 'react'
import Modal from 'react-modal'
import './CalendarModal.css'
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';


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


export const CalendarModal = () => {
    
    const [modalIsOpen, setIsOpen] = useState( false );

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
        // console.log("cerrando...")
    }

    
    const [startDate, setStartDate] = useState( moment().minute(0).second(0).toDate() )
    
    const handleStartDateChange = ( e ) => {
        setStartDate( e )
    }
    
    const [endDate, setEndDate] = useState( moment().minute(0).second(0).add( 1,'hours' ).toDate() )
    
    const handleEndDateChange = ( e ) => {
        setEndDate( e )
    }

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>

            <Modal 
                isOpen={ true }
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={ 200 }
                className="modal"
                overlayClassName="modal-fondo"
            >
                <h1> Nuevo evento </h1>
                <hr />
                <form className="container">
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
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                        />
                        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                    </div>

                    <div className="form-group">
                        <textarea 
                            type="text" 
                            className="form-control"
                            placeholder="Notas"
                            rows="5"
                            name="notes"
                        ></textarea>
                        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
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
