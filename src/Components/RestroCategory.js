import ItemList from "./Itemslst";

const RestroCategory =({data})=>{
    return(
        <div>
            <div className="w-7/12 m-auto p-4 shadow-inner">
            <div className="flex justify-between">
            <span className="font-semibold text-lg">{data.title} ({data.itemCards.length})</span>
            <span className="w-6 h-6">🔻</span>
            </div>
            <ItemList items={data.itemCards}/>
            </div>   
        </div>
  
    );
};

export default RestroCategory