import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { CDN } from "../Utils/constant";
import { useParams } from "react-router-dom";
import { Menu_API } from "../Utils/constant";


const RestroMenu =()=>{

    const [resInfo, setresInfo] = useState(null);
    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    }, []);

    const fetchMenu = async ()=>{
        const data = await fetch(Menu_API + resId);
    const json = await data.json();
    
    setresInfo(json.data);
};
    if(resInfo===null) return <Shimmer/>;

const { name, cuisines, cloudinaryImageId }  = resInfo?.cards[0]?.card?.card?.info;

const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return(
        <div className="Menu">
            <h1>{name}</h1>
            <p>{cuisines.join(" , ")}</p>
            <img className= "cardImg" src={CDN+cloudinaryImageId}/>
            <h3>Menu</h3>
            <ul>
                {itemCards?.map((item)=>(<li key={item?.card?.info?.id}>{item?.card?.info?.name || item?.card?.card?.carousel[0]?.dish?.info?.name} - ₹{(item?.card?.info?.price)/100 || (item?.card?.info?.defaultPrice)/100 }</li>))} 
            </ul>

        </div>
    );
};





export default RestroMenu