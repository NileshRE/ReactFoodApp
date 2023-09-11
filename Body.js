import Item from "./Top_Items";
import ResCard from "./ResCard";
import {Top} from "../Utils/constant";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";



const Body =() => {

    const[resList, setresList] = useState([]);

    const [searchText, setSearchText] = useState(""); 

    const[filteredList, setFilteredList] = useState([]);
    

    const fetchData= async () => {
      const data = await fetch (
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5478897&lng=77.2031247&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      
      const json = await data.json();
      const rest= json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      
      setresList(rest);
      setFilteredList(rest);
       
    };

    useEffect(() => {
        fetchData();
      }, []);
      

    return resList.length==0 ? (
        <Shimmer/>
    ) : (
        <div id ="main">
        <div className ="top_Items">
            {Top.map((restaurant) => (
                <Item Top={restaurant} />
            ))}
        </div>

        <h4> Restaurants near you </h4>
          <div className="search">
        <input type="text" className="search-box" value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                    />
                    <button className="btn2" onClick={()=>{
                        const filteredRestaurant = resList.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredList(filteredRestaurant);

                    }}> Search </button>
                    

        <button type="button" className="btn" onClick={() =>{
        const filterList = resList.filter (
            (res) => res.avgRating > 4.1 );
            setresList(filterList);
            }}>Top Rated Restaurant</button>

</div>
    
        <div className="relist">
         {filteredList?.map((restaurant) => (
                <ResCard resList={restaurant}/>
            ))}
            </div>
        </div>
    );
};

export default Body