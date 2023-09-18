import ItemList from "./Itemslst";
import { useState } from "react";

const RestroCategory =({data, showIndex, setShowIndex})=>{

    const handleClick =()=>{
        setShowIndex();
    }
    return(
        <div>
            <div className="w-7/12 m-auto p-4 shadow-inner">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-semibold text-lg">{data.title} ({data.itemCards.length})</span>
            <span className="w-6 h-6">🔻</span>
            </div>
            {showIndex && <ItemList items={data.itemCards}/>}
            </div>   
        </div>
  
    );
};

export default RestroCategory