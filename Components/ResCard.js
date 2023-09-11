import {resList} from "../Utils/constant";
import { CDN } from "../Utils/constant";
import { star } from "../Utils/constant";
import { Icon1 } from "../Utils/constant";


const ResCard = ({resList}) => {

    const {
         name, cloudinaryImageId, avgRating, cuisines, areaName} = resList.info;

         console.log(resList)

         

    return (
     <div id="res_Card">
         <img className="cardImg" src={CDN + cloudinaryImageId}/>
         <div className="Resdetail">
         <h3 className="Resname">{name}</h3>
         <div className="rating">
         <span>{avgRating}</span>
         <img className="star" src={star}/>
         </div>
         <p>{cuisines.join(" | ")}</p>
         <p>{areaName}</p>
         </div>
     </div>
     );
    };


 export default ResCard