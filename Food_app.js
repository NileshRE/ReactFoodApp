import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Offers from "./src/Components/Offers";
import Error from "./src/Components/Error";
import RestroMenu from "./src/Components/RestaurantMenu";
import { lazy, Suspense } from "react";

const Aboutus = lazy(()=> import("./src/Components/Aboutus.js"));

const App =() => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
        
    );
};

const approuter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
       children:[
        {
            path:"/",
            element:<Body/>
        },
    {
        path:"/Aboutus",
        element: (
        <Suspense fallback={<h1>Loading....</h1>}>
            <Aboutus/>
            </Suspense>
            ),
    },
    {
        path:"/Offers",
        element:<Offers/>,
    },
    {
        path:"/restaurants/:resId",
        element:<RestroMenu/>,
    },
],
    errorElement:<Error/>
}
    // {
    //     path:"/Sign in",
    //     element:<SignIn/>
    // },
    // {
    //     path:"/Cart",
    //     element:<Cart/>
    // },
    
]);



const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {approuter}/>);