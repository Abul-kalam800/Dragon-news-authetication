import React, { use } from 'react';
import { AuthContex } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loding from '../componets/Loding';

const PrivetRouts = ({ children }) => {
    const { loding, user } = use(AuthContex)
   const location = useLocation();
//    console.log(location)

    if (loding) {
        return <Loding></Loding>
    }
    if (user && user?.email) {
        return children;
    } return <Navigate state={location.pathname} to='/auth/login'></Navigate>



};

export default PrivetRouts;