import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import logo from '../../../Asset/logo.png';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                const user = result.user;
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/allmenu'>
                            <button className='btn btn-outline lg:text-2xl text-sm'>All Menu
                            </button>
                        </Link>
                        <Link to='/blog'>
                            <button className='btn btn-outline lg:text-2xl text-sm'>Blog
                            </button>
                        </Link>

                        {
                            user?.email ?
                                <Link to='/myreview'>
                                    <button className='btn btn-outline lg:text-2xl text-sm'>My Review</button>
                                </Link> :
                                null
                        }


                    </ul>
                </div>
                <Link to='/'><img src={logo} alt="" className='w-2/4 md:w-full' /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-4 p-0">
                    <Link to='/allmenu'>
                        <button className='btn btn-outline border-2 lg:text-2xl text-sm'>All Menu</button>
                    </Link>
                    <Link to='/blog'>
                        <button className='btn btn-outline border-2 lg:text-2xl text-sm'>Blog</button>
                    </Link>


                    {
                        user?.email ?
                            <Link to='/myreview'>
                                <button className='btn btn-outline border-2 lg:text-2xl text-sm'>My Review</button>
                            </Link> :
                            null
                    }
                    {
                        user?.email ?
                            <Link to='/addfood'>
                                <button className='btn btn-outline border-2 lg:text-2xl text-sm'>Add Food</button>
                            </Link> :
                            null
                    }

                </ul>
            </div>
            <div className="navbar-end">


                {user?.email ?
                    <Link to='' onClick={handleLogOut} className="ml-5 btn btn-success text-black lg:font-bold lg:text-2xl">Log Out </Link> :
                    <Link to='/login' className="btn btn-success text-black lg:font-bold lg:text-2xl">Login With <span className='ml-3'><FcGoogle /></span></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;