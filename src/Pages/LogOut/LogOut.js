import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const LogOut = () => {
    const {logOut} = useContext(AuthContext);
    
    return (
        <div>
            
        </div>
    );
};

export default LogOut;