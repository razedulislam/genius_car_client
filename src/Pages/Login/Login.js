import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import app from "../../firebase.init";

const Login = () => {
    const auth = getAuth(app);
    const [user, setUser] = useState({});
    console.log(user);
    const provider = new GoogleAuthProvider();

    const googleSignIn = async () => {
        try {
            const response = await signInWithPopup(auth, provider);
            console.log("User sign in", response);
            setUser(response.user);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    };

    const inputHandle = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        e.target.email.value = "";
        e.target.password.value = "";
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={login} alt="" />
                    {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={inputHandle}>
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" />
                            {/* <button className="btn btn-primary">Login</button> */}
                        </div>
                    </form>
                    <Link>
                        <h1 onClick={googleSignIn} className="text-center my-3 text-bold">
                            Google In
                        </h1>
                    </Link>
                    <p className="text-center pb-5">
                        Create a new account{" "}
                        <Link to="/signup" className="text-orange-600 font-bold">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
