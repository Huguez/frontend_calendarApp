import React from 'react';
import './Login.css';
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'

import { startLogin } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch()

    const [ formLoginValues, handleLoginInputChange,  ] = useForm( {
        loginEmail: 'wawa@wawa.com', 
        loginPassword: '1234567',
    } )

    const { loginEmail, loginPassword } = formLoginValues

    const handleLoginSubmit = ( e ) => {
        e.preventDefault();

        // handleLoginInputChange(  )
        dispatch( startLogin( loginEmail, loginPassword ) )
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
                                name="email"
                                type="email"
                                className="form-control  m-1"
                                placeholder="Correo"
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={ loginPassword }
                                name="password"
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
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control m-1"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control  m-1"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control  m-1"
                                placeholder="Contraseña" 
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
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