
import React, {lazy} from "react";
import ReactDOM from "react-dom/client";

import HeaderComp from "./components/HeaderComp";
import BodyComp from "./components/BodyComp";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error"; 
import RestuarantMenu from "./components/RestuarantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


const Grocery = lazy(()=> import("./components/Grocery")); //Chunking Grocery section


const Applayout = () => { 
    return(
        <div className ="app">
            <HeaderComp/>
            <Outlet/>
            <Footer/>
        </div>
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
                path: "/restuarants/:resID",
                element: <RestuarantMenu/>
            }
        ]
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)

