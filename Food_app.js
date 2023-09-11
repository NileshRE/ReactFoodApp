import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";


const App =() => {
    return (
        <div>
            <Header/>
            <h4> What would you like to have!!</h4>
            <Body/>
        </div>
        
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);