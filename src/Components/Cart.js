import { useSelector } from "react-redux";
import ItemList from "./Itemslst";

const Cart=()=>{

    const cartItems = useSelector((store)=>store.cart.items);

    return(
        <div>
           <ItemList items={cartItems}/>
        </div>
    );
}

export default Cart; 