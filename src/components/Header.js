import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

import {
    FiHome,
    FiInfo,
    FiShoppingBag,
    FiPhone,
    FiShoppingCart,
    FiLogIn,
    FiLogOut,
    FiUser,
    FiCheck,
    FiX
} from 'react-icons/fi';

const Header = () => {

    const data = useContext(UserContext);

    // console.log(data, "data")
    const { loggedInUser } = data;

    let btnName = "Login"
    // console.log(btnName, "btnName")

    const [btnNameReact, setBtnNameReact] = useState("Login")
    // console.log("Header Rendered")
    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items)
    // console.log(cartItems, "cart_items")


    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50 px-2 sm:bg-green-100">
            <div className="flex items-center">
                <img
                    className="h-12 w-12 rounded-full object-cover"
                    src="https://static.vecteezy.com/system/resources/previews/014/664/003/non_2x/cafe-and-resto-logo-vector.jpg"
                    alt="Cafe Logo"
                />
                <span className="ml-3 text-2xl font-bold text-gray-800">Cafe & Resto</span>
            </div>
            <nav>
                <ul className="flex space-x-6 text-gray-700 font-medium items-center">
                    <li className="cursor-pointer hover:text-blue-500 px-4 flex items-center">
                        {onlineStatus ?
                            <FiCheck className="h-5 w-5 mr-1 text-green-500" /> :
                            <FiX className="h-5 w-5 mr-1 text-red-500" />}
                        Online Status: {onlineStatus ? "💚" : "💔"}
                    </li>
                    <li className="cursor-pointer hover:text-blue-500 flex items-center">
                        <Link to="/" className="flex items-center">
                            <FiHome className="h-5 w-5 mr-1" />
                            Home
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:text-blue-500 flex items-center">
                        <Link to="/about" className="flex items-center">
                            <FiInfo className="h-5 w-5 mr-1" />
                            About
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:text-blue-500 flex items-center">
                        <Link to="/grocery" className="flex items-center">
                            <FiShoppingBag className="h-5 w-5 mr-1" />
                            Grocery
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:text-blue-500 flex items-center">
                        <Link to="/contact" className="flex items-center">
                            <FiPhone className="h-5 w-5 mr-1" />
                            Contact
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:text-blue-500 flex items-center gap-1">
                        <Link to="/cart" className="flex items-center">
                            <FiShoppingCart className="h-5 w-5 mr-1" />
                            ({cartItems.length} items)
                        </Link>
                    </li>

                    <button className="cursor-pointer login flex items-center" onClick={() => {
                        btnNameReact === "Login" ?
                            setBtnNameReact("Logout") : setBtnNameReact("Login")
                    }}>
                        {btnNameReact === "Login" ?
                            <FiLogIn className="h-5 w-5 mr-1" /> :
                            <FiLogOut className="h-5 w-5 mr-1" />}
                        {btnNameReact}
                    </button>

                    <li className="font-bold text-gray-800 cursor-pointer hover:text-blue-500 flex items-center">
                        <FiUser className="h-5 w-5 mr-1" />
                        {loggedInUser?.name}
                    </li>
                </ul>

            </nav>
        </header>
    );
};

export default Header;