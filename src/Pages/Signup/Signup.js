import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import app from "../../firebase.init";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
const Signup = () => {
    const provider = new GoogleAuthProvider();
    const inputSignUpHandle = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.password.value = "";
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password, name)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
                // ..
            });
    };
    const handleSignUpWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user); //google gives us api.. we can use all information of users
            })
            .catch((error) => {
                console.log(error);
            });
        // console.log(response);
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={login} alt="" />
                    {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={inputSignUpHandle} novalidate>
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Sign Up" />
                            {/* <button className="btn btn-primary">Login</button> */}
                        </div>
                    </form>
                    <p className="text-center pb-5">
                        Already have an account?{" "}
                        <Link to="/login" className="text-orange-600 font-bold">
                            Log In
                        </Link>
                        <h1 onClick={handleSignUpWithGoogle} className=" text-orange-600 font-bold">
                            <button className="">Google</button>
                        </h1>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
