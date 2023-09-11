import { logoIcon } from "../Utils/constant";
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6 } from "../Utils/constant";
import { useState } from "react";



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
              <div className="iconname">
              <li> Offers </li>
              <img className="icon" src={Icon3}/>
              </div>
              <div className="iconname">
              <li> Help </li>
              <img className="icon" src={Icon4}/>
              </div>
              <div className="iconname">
              <li> Sign In </li>
              <img className="icon" src={Icon5}/>
              </div>
              <div className="iconname">
              <li> Cart </li>
              <img className="icon" src={Icon6}/>
              </div>
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