
import React, {lazy} from "react";
import ReactDOM from "react-dom/client";

import HeaderComp from "./components/HeaderComp";
import BodyComp from "./components/BodyComp";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";
import Error from "./components/Error"; 
import RestuarantMenu from "./components/RestuarantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import reduxStore from "../Utilities/reduxStore";


const Grocery = lazy(()=> import("./components/Grocery")); //Chunking Grocery section


const Applayout = () => { 
    return(
        <Provider store={reduxStore}>
        <div className ="app">
            <HeaderComp/>
            <Outlet/>
            <Footer/>
        </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element: <Applayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <BodyComp/>
            },
            {
                path: "/about",
                element: <AboutUs/>
            },
            {
                path: "/grocery",
                element: <Grocery/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/restuarants/:resID",
                element: <RestuarantMenu/>
            }
        ]
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)

