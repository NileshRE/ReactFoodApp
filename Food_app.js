import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Help from "./Components/Help";
import Offers from "./Components/Offers";
import Error from "./Components/Error";
import RestroMenu from "./Components/RestaurantMenu";


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
        path:"/Help",
        element:<Help/>,
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