
import Shimmer from "./shimmer";
import { CDN } from "../Utils/constant";
import { useParams } from "react-router-dom";
import useRestroMenu from "../Utils/useRestroMenu";


const RestroMenu =()=>{

    
    const {resId} = useParams();

    const resInfo = useRestroMenu(resId);

    
    if(resInfo===null) return <Shimmer/>;

const { name, cuisines, cloudinaryImageId }  = resInfo?.cards[0]?.card?.card?.info;

const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

const Categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.filter((c)=>c?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Dish"

);

    return(
        <div className="m-8">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <img className= "w-64 my-4 rounded-md" src={CDN+cloudinaryImageId}/>
            <h3 className="text-lg font-medium mb-4">Menu</h3>
            <div className="">
            <ul className="text-md">
                {itemCards?.map((item)=>(<li key={item?.card?.info?.id}>{item?.card?.info?.name || item?.card?.card?.carousel[0]?.dish?.info?.name} - ₹{(item?.card?.info?.price)/100 || (item?.card?.info?.defaultPrice)/100 }</li> ))}
            </ul>
            
            </div>
        </div>
    );
};





export default RestroMenu