import { Top } from "../../src/Utils/constant";
import { CDN } from "../../src/Utils/constant";

const Item = (props) => {
    const{Top} = props;

    const {
        imageId} = Top;

    return (
        <div>
            <img className="w-36 " src={CDN + imageId}/>
        </div>
    );
};

export default Item