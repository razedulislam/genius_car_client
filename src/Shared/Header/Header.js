import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import app from "../../firebase.init";

const Header = () => {
    const auth = getAuth(app);
    const Signout = () => {
        signOut(auth)
            .then(() => {
                console.log("Sign-out successful");
            })
            .catch((error) => {
                // An error happened.
            });
    };
    const menuItems = (
        <>
            <li className="font-bold">
                <Link className="font-semibold" to="/">
                    Home
                </Link>
                <Link className="font-semibold" to="/login">
                    Login
                </Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 h-20 mb-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" href="/" className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{menuItems}</ul>
            </div>
            <div className="navbar-end">
                <button onClick={Signout} className="mx-5">
                    Sign Out
                </button>
                <button className="btn btn-accent text-white">Appointment</button>
            </div>
        </div>
    );
};

export default Header;
