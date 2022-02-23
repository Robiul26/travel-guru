import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';

const PrivateRoute = ({children}) => {
    const [logedInUser, setLogedInUser] = useContext(UserContext);
    const location = useLocation();
    const getStorUser = localStorage.getItem('user');
    const getUser = JSON.parse(getStorUser);
    return (
        <div>
           {  getUser ? children : <Navigate to="/login" state={{ from: location }} replace />}
        </div>
    );
};

export default PrivateRoute;