import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import "./Banner.css";
const Banner = () => {
    return (
        <div className="carousel w-full mb-5">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="img-gradient">
                    <img src={img1} alt="" className="rounded-lg" />
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/4">
                    <h1 className="text-5xl font-bold text-white">
                        Affordable <br />
                        Price for Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/2">
                    <h1 className="text-base font-light text-white w-2/5">
                        Lorem ipsum dolor Non necessitatibus cupiditate quis dolores veniam! Numquam natus illo laudantium amet incidunt temporibus, expedita accusamus! Aliquid quia nisi corporis,
                        recusandae aut beatae!
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 bottom-10">
                    <button className="btn btn-active btn-secondary">Button</button>
                    <button className="btn btn-active btn-accent ml-3 text-white">Button</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="img-gradient">
                    <img src={img2} alt="" class="rounded-xl w-full" />
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/4">
                    <h1 className="text-5xl font-bold text-white">
                        Affordable <br />
                        Price for Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/2">
                    <h1 className="text-base font-light text-white w-2/5">
                        Lorem ipsum dolor Non necessitatibus cupiditate quis dolores veniam! Numquam natus illo laudantium amet incidunt temporibus, expedita accusamus! Aliquid quia nisi corporis,
                        recusandae aut beatae!
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 bottom-10">
                    <button className="btn btn-active btn-secondary">Button</button>
                    <button className="btn btn-active btn-light ml-3 text-secondary">Button</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="img-gradient">
                    <img src={img3} alt="" className="rounded-lg" />
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/4">
                    <h1 className="text-5xl font-bold text-white">
                        Affordable <br />
                        Price for Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/2">
                    <h1 className="text-base font-light text-white w-2/5">
                        Lorem ipsum dolor Non necessitatibus cupiditate quis dolores veniam! Numquam natus illo laudantium amet incidunt temporibus, expedita accusamus! Aliquid quia nisi corporis,
                        recusandae aut beatae!
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 bottom-10">
                    <button className="btn btn-active btn-secondary">Button</button>
                    <button className="btn btn-active btn-accent ml-3 text-white">Button</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className="img-gradient">
                    <img src={img4} alt="" className="rounded-lg" />
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/4">
                    <h1 className="text-5xl font-bold text-white">
                        Affordable <br />
                        Price for Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/2">
                    <h1 className="text-base font-light text-white w-2/5">
                        Lorem ipsum dolor Non necessitatibus cupiditate quis dolores veniam! Numquam natus illo laudantium amet incidunt temporibus, expedita accusamus! Aliquid quia nisi corporis,
                        recusandae aut beatae!
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 bottom-10">
                    <button className="btn btn-active btn-secondary">Button</button>
                    <button className="btn btn-active btn-accent ml-3 text-white">Button</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
