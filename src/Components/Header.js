import { logoIcon } from "../Utils/constant";
import { Icon1 } from "../Utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useName, useTheme} from "../Utils/UserContext";
import { useSelector } from "react-redux";


const Header =()=> {
    const [btnlog, setbtnlog] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {name}= useName();
    const {theme, setTheme} = useTheme();
    const cart = useSelector((store)=>store.cart.items);

    return (
      <div className={`flex justify-between p-2 shadow-sm ${theme==="light"?"bg-white":"bg-black text-white"}`}>
        <div className="flex justify-evenly items-center ml-6">
            <img className="w-20" src={logoIcon}/>
            <p><em>Hauz Khas</em><span>,New Delhi</span></p>
            <img className="w-4 ml-1" src={Icon1}/>
        </div>
        <div className="flex items-center">
          <ul className="flex items-center">
              <li className="px-6"> Status: {onlineStatus ? "💚" : "❤️"}</li>
              <li className="px-6"><Link to="/">Home</Link></li>
              <li className="px-6"><Link to="/Offers">Offers</Link> </li>
              <li className="px-6"><Link to="/Aboutus">About Us</Link></li>
              <li className="px-6"><Link to="/Cart">Cart({cart.length})</Link></li>
              <li className="px-6 font-medium">{name} </li>
              <button className="px-4 py-2 mr-8 bg-orange-400 rounded-md text-white" onClick={()=>{
                btnlog=="Login" ? setbtnlog("Logout") : setbtnlog("Login")
              }} 
              > {btnlog} </button>
          </ul>
          <button className="px-2 py-1 border border-blue-400 rounded-md cursor-pointer" 
          onClick={()=>setTheme((prev)=>prev === "light" ? "dark" : "light")}>
            {theme==="light"?"Dark":"Light"}</button>
      </div>
      </div>
      );
  };
     

     export default Header