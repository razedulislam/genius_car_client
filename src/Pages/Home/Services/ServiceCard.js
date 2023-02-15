import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = (prod) => {
    const { _id, name, img, price } = prod.prod;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`checkout/${_id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
