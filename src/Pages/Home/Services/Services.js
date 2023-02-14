import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((product) => setProducts(product));
    }, []);
    return (
        <div className="text-center">
            <p className="text-2xl font-bold text-orange-600">Service</p>
            <h2 className="text-5xl font-semibold">Our services area</h2>
            <p className="my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Hic ullam veritatis nobis nam recusandae voluptatem eaque quod illum, laborum sunt?
            </p>
            <div className="grid grid-cols-1 my-3 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((prod) => (
                    <ServiceCard key={prod.key} prod={prod}></ServiceCard>
                ))}
            </div>
        </div>
    );
};

export default Services;
