import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch,  Redirect } from 'react-router-dom'
import { startChecking } from '../actions/auth'
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {

    const dispatch = useDispatch()
    const { checking,  _id  } = useSelector( state => state.auth )

    useEffect( () => {
        dispatch( startChecking() )
    }, [ dispatch ] );
    
    
    if( checking ){        
        return <h2>Espere...</h2>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={ !!_id } path="/auth/login" component={ LoginScreen } /> 
                    {/* <Route exact path="/auth/login" component={ LoginScreen } />       */}

                    {/* <Route exact path="/" component={ CalendarScreen } /> */}

                    <PrivateRoute isAuthenticated={ !!_id } path="/" component={ CalendarScreen } /> 

                    <Redirect to ='/' />
                </Switch>
            </div>
        </Router>
    )
}
