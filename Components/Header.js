import { logoIcon } from "../Utils/constant";
import { Icon1 } from "../Utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";



const Header =()=> {
    const [btnlog, setbtnlog] = useState("Login");

    return (
      <div id="Header">
        <div className="logo_add">
            <img className="logo" src={logoIcon}/>
            <p> <em>Hauz Khas</em> <span>, New Delhi</span></p>
            <img className="icon" src={Icon1}/>
        </div>
        <div className="headersub">
          <ul className="lists">
              <li> <Link to="/">Home</Link></li>
              <li> <Link to="/Offers">Offers</Link> </li>
              <li> <Link to="/Help">Help</Link></li>
              <li> Sign In </li>
              <li> Cart </li>
              <button className="btn" onClick={()=>{
                btnlog=="Login" ? setbtnlog("Logout") : setbtnlog("Login")
              }} 
              > {btnlog} </button>
          </ul>
      </div>
      </div>
      );
  };
     

     export default Header