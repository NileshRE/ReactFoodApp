import RestroCategory from "./RestroCategory";
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


const Categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

);




    return(
        <div className="m-8 text-center">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <img className= "w-80 my-4 rounded-md mx-[40%]" src={CDN+cloudinaryImageId}/>
            <h3 className="text-lg font-medium mb-4">Menu</h3>
                {Categories.map((category) => (
                    <RestroCategory data ={category?.card?.card}/>
                ))}
        </div>
    );
};





export default RestroMenu