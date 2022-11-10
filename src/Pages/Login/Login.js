import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const provider = new GoogleAuthProvider();
    const {googleLogin} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        googleLogin(provider)
          .then(result =>{
            const user = result.user;
          })
          .catch(err =>{
            console.log(err);
          })
    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <button type='submit' className="form-control mx-auto">
                                <FcGoogle className='text-9xl text-center' />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;