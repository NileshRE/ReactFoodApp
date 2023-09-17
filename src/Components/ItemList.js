
const ItemList=({items})=>{
    return(
        <div>
            {items.map((item)=>(
                <div key ={item.card.info.id} className="m-4 p-4 border-gray-300 border-b-2 text-left">
                    <div className="grid">
                        <span className="text-md pb-2 font-thin">{item.card.info.name}</span>
                        <span className="text-sm pb-2">₹{item.card.info.price/100}</span>
                    </div>
                    <p className="text-xs pb-2">{item.card.info.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ItemList;