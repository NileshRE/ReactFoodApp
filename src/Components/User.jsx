import { useState } from "react";

const User = ({name, location}) => {

    const [ count2] = useState(0);

    return (
    <div className="Usercard">
        <h2>Count : {count2}</h2>
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>Contact: @19nilesh.kumar</p>
    </div> 
    );
    };


export default User