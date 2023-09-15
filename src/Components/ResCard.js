
import { CDN } from "../../src/Utils/constant";
import { star } from "../../src/Utils/constant";


const ResCard = ({resList}) => {

    const {
         name, cloudinaryImageId, avgRating, cuisines, areaName} = resList.info;


    return (
     <div className="w-80 mr-8 p-6 mb-4 shadow-inner rounded-md">
         <img className="w-[100%] h-[240px]" src={CDN + cloudinaryImageId}/>
         <div className="flex-inline flex-row flex-wrap justify-start my-4 rounded-t-md">
         <h3 className="text-lg font-medium">{name}</h3>
         <div className="flex items-center">
         <span>{avgRating}</span>
         <img className="w-4 pl-1" src={star}/>
         </div>
         <p>{cuisines.join(" | ")}</p>
         <p className="mt-2 font-light tracking-wide">{areaName}</p>
         </div>
     </div>
     );
    };


 export default ResCard