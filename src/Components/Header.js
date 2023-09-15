import { logoIcon } from "../Utils/constant";
import { Icon1 } from "../Utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";



const Header =()=> {
    const [btnlog, setbtnlog] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
      <div className="flex justify-between p-2 shadow-sm">
        <div className="flex justify-evenly items-center ml-6">
            <img className="w-20" src={logoIcon}/>
            <p> <em>Hauz Khas</em> <span>, New Delhi</span></p>
            <img className="w-4 ml-1" src={Icon1}/>
        </div>
        <div className="flex items-center">
          <ul className="flex items-center">
              <li className="px-6"> Status: {onlineStatus ? "💚" : "❤️"}</li>
              <li className="px-6"> <Link to="/">Home</Link></li>
              <li className="px-6"> <Link to="/Offers">Offers</Link> </li>
              <li className="px-6"> <Link to="/Aboutus">About Us</Link></li>
              <li className="px-6"> Cart </li>
              <button className="px-4 py-2 mr-8 bg-orange-400 rounded-md text-white" onClick={()=>{
                btnlog=="Login" ? setbtnlog("Logout") : setbtnlog("Login")
              }} 
              > {btnlog} </button>
          </ul>
      </div>
      </div>
      );
  };
     

     export default Header