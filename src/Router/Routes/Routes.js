import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        // main er beter vitor sob element gula child hisabe thakbe
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <Signup></Signup>,
            },
            {
                path: "/checkout/:id",
                element: <Checkout></Checkout>,
                // loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                loader: ({ params }) => fetch(`https://genius-car-server-u1gu.onrender.com/services/${params.id}`),
            },
        ],
    },
]);
export default router;
