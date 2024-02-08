import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Offers from "./src/Components/Offers";
import Error from "./src/Components/Error";
import Cart from "./src/Components/Cart";
import RestroMenu from "./src/Components/RestaurantMenu";
import UserContext from "./src/Utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/Utils/appStore";

const Aboutus = lazy(()=> import("./src/Components/Aboutus.js"));

const App =() => {

    const[UserName, setUserName] = useState();

    useEffect(()=>{

        const data = {
            name: "Nilesh Kumar"
        }
        setUserName(data.name);
    },[])

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: UserName}}>
        <div>
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>  
        </Provider>     
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
    {
        path:"/Cart",
        element:<Cart/>,
    },
    
],
    errorElement:<Error/>
}
]);



const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {approuter}/>);