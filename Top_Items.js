import { Top } from "../Utils/constant";
import { CDN } from "../Utils/constant";

const Item = (props) => {
    const{Top} = props;

    const {
        imageId} = Top;

    return (
        <div>
            <img className="foodItems" src={CDN + imageId}/>
        </div>
    );
};

export default Item