import React, { Children, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user}= useContext(AuthContext)
    if(user){
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
    
    
};

export default PrivetRoute;