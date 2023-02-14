import React from "react";
import img1 from "../../../assets/images/about_us/person.jpg";
import img2 from "../../../assets/images/about_us/parts.jpg";
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="relative w-1/2 ">
                    <img src={img1} alt="" className="max-w-sm w-4/5 rounded-lg shadow-2xl" />
                    <img src={img2} alt="" className=" absolute right-5 top-2/3 w-3/5 max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className="w-1/2">
                    <p className="text-2xl text-bold text-orange-600">About Us</p>
                    <h1 className="text-5xl font-bold">
                        We are qualified <br />
                        & of Experience
                        <br />
                        in this Field
                    </h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p className="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores ex quo quas ab expedita quaerat.</p>

                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
