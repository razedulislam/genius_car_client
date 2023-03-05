import { getAuth } from "firebase/auth";

import { Link, useLoaderData } from "react-router-dom";
import app from "../../firebase.init";

const Checkout = () => {
    const { _id, category, price } = useLoaderData();

    const auth = getAuth(app);
    const user = auth.currentUser;
    const handleUser = (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const phone = e.target.yourPhone.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        // Regular expression to validate phone number
        const phoneRegex = /^\+?\d{10,14}$/;

        // Check if the phone number is valid
        if (!phoneRegex.test(phone)) {
            alert("Please enter a valid phone number.");
        }
        alert("Please enter a valid phone number.");
        const order = {
            Service: _id,
            ServiceName: category,
            price$: price,
            customerFirstName: firstName,
            customerLastName: lastName,
            phone,
            email,
            message,
        };

        // fetch("http://localhost:5000/orders", {
        fetch("https://genius-car-server-u1gu.onrender.com/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    return (
        <div>
            {!user ? (
                <button className="btn btn-active btn-ghost mb-5">
                    <Link to="http://localhost:3000/login">Log In </Link>
                </button>
            ) : (
                <div>
                    <Link to={`/checkout/${user._id}`}></Link>
                    <form action="" onSubmit={handleUser}>
                        <h1>Check out</h1>
                        <h1 className="text-4xl text-orange-600">
                            {category} and Prince is ${price}
                        </h1>
                        <div className="grid gap-4 gril-cols-1 md:grid-cols-2 mb-5">
                            <input name="firstName" type="text" placeholder="First Name" className="input input-bordered input-warning w-full " required />
                            <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered input-warning w-full" />
                            <input name="yourPhone" type="text" placeholder="Your Phone" className="input input-bordered input-warning w-full" required />
                            <input name="email" type="email" placeholder="Your Email" className="input input-bordered input-warning w-full" required />
                        </div>
                        <textarea name="message" className="textarea textarea-success w-full" placeholder="Write here"></textarea>
                        <input type="submit" className="btn" value="place your order" />
                    </form>
                </div>
            )}
        </div>
    );
};

export default Checkout;
