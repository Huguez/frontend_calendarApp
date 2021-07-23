import React from 'react';
import './Login.css';
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'

import { startLogin, startRegister } from '../../actions/auth';
import Swal from 'sweetalert2';

export const LoginScreen = () => {

    const dispatch = useDispatch()

    const [ formLoginValues, handleLoginInputChange,  ] = useForm( {
        loginEmail: '', 
        loginPassword: '',
    } );
    const { loginEmail, loginPassword } = formLoginValues

    const [ formRegisterValues, handleRegisterInputChange,  ] = useForm( {
        registerName: 'algo', 
        registerEmail: 'algo@algo.com', 
        registerPassword: '1234567',
        registerRepPassword: '1234567',
    } );
    const { registerName, registerEmail, registerPassword, registerRepPassword } = formRegisterValues

    const handleLoginSubmit = ( e ) => {
        e.preventDefault();

        dispatch( startLogin( loginEmail, loginPassword ) )
    }

    const handleRegisterSubmit = ( e ) => {
        e.preventDefault();

        if( registerPassword !== registerRepPassword ){
            return Swal.fire( 'error', 'Los password deben de ser iguales', 'warning' )
        }

        dispatch( startRegister( registerEmail, registerName, registerPassword ) )        
    }

    return (
        <div className="container login-container mt-5 ">
            <div className="row">
                <div className="col-md-6 login-form-1  mt-5">
                    <h3>Log In</h3>
                    <form onSubmit={ handleLoginSubmit }>
                        <div className="form-group">
                            <input 
                                value={ loginEmail }
                                onChange={ handleLoginInputChange }
                                autoComplete="off"
                                name="loginEmail"
                                type="text"
                                className="form-control  m-1"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={ loginPassword }
                                name="loginPassword"
                                onChange={ handleLoginInputChange }
                                type="password"
                                className="form-control  m-1"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>
                
                <div className="col-md-6 login-form-2 mt-5">

                    <h3>Registro</h3>
                    <form onSubmit={ handleRegisterSubmit } >
                        <div className="form-group">
                            <input
                                type="text"
                                value={ registerName }
                                name="registerName"
                                onChange={ handleRegisterInputChange }
                                autoComplete="off"
                                className="form-control m-1"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                value={ registerEmail }
                                name="registerEmail"
                                onChange={ handleRegisterInputChange }
                                autoComplete="off"
                                className="form-control  m-1"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                value={ registerPassword }
                                name="registerPassword"
                                onChange={ handleRegisterInputChange }
                                autoComplete="off"
                                className="form-control  m-1"
                                placeholder="Contraseña" 
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                value={ registerRepPassword }
                                name="registerRepPassword"
                                onChange={ handleRegisterInputChange }
                                autoComplete="off"
                                className="form-control  m-1"
                                placeholder="Repita la contraseña" 
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}