import { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import User from "./components/User";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const data = {
            name: "John Doe",
        }
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{
                loggedInUser: {
                    name: userName,
                    email: "user@example.com",
                },
                setUserName: setUserName
            }}>
                <div className="min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-grow">
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/grocery",
                element:
                    <Suspense fallback={<div>Loading...</div>}>
                        <Grocery />
                    </Suspense>,
            },
            {
                path: "Login",
                element: <Login />,
            }
        ],
        errorElement: <Error />,
    },
]);

// Export for testing
export { UserContext, AppLayout, appRouter };

// Only run in browser environment (not in Jest tests)
if (typeof document !== 'undefined' && document.getElementById("root")) {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={appRouter} />);
}
