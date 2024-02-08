import { useDispatch } from "react-redux";
import { CDN } from "../Utils/constant";
import { addItem } from "../Utils/CartSlice";

const ItemList=({items})=>{

    const dispatch = useDispatch();

    const handleAddItem = () =>{
        dispatch(addItem());
    };

    return(
        <div>
            {items?.map((item)=>(
                <div key ={item?.card.info.id} className="m-4 p-4 flex justify-between border-gray-300 border-b-2 text-left">
                    <div className="grid">
                        <span className="text-md pb-2 font-thin">{item?.card.info.name}</span>
                        <span className="text-sm pb-2">₹{item?.card.info.price/100 || item?.card.info.defaultPrice/100}</span>
                        <p className="text-xs pb-2">{item?.card.info.description}</p>
                    </div>
                    <div className="grid p-1"> 
                     <img src={CDN+item?.card.info.imageId} className="w-24 rounded-sm"/>
                     <button className="px-2 py-1 mt-16 mx-4 overlay bg-white shadow-inner absolute rounded-md"
                     onClick={()=>handleAddItem(item)}
                     >Add +</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;