import React from 'react'
import { Route, Navigate  } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...rest}) {

    const { currentUser } = useAuth();


// <Component {...props} />


    return (
        <Route 
            {...rest}
            render={(props) => {
                return currentUser ? <Navigate to="/login"/>  : <Navigate to="/login" />
            }}
        ></Route>
    )
}
