import Item from "./Top_Items";
import ResCard, { withOffer } from "./ResCard";
import {Top} from "../../src/Utils/constant";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../src/Utils/useOnlineStatus";



const Body =() => {

    const[resList, setResList] = useState([]);

    const [searchText, setSearchText] = useState(""); 

    const[filteredList, setFilteredList] = useState([]);

    const OfferCard = withOffer({ResCard});
    
    useEffect(() => {
      fetchData();
    }, []);
    

    const fetchData= async () => {
      const data = await fetch (
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5478897&lng=77.2031247&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      
      const json = await data.json();
      const rest= json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setResList(rest);
      setFilteredList(rest);    
    };

      const onlineStatus = useOnlineStatus();

      if(onlineStatus===false) return (
      <h1>Looks like you have lost data connection.</h1>
      );

    return resList?.length===0 ? (
        <Shimmer/>
    ) : (
        <div className ="m-8">
        <h4 className="text-xl font-semibold mt-4"> What would you like to have!!</h4>
        <div className ="md:flex my-4 justify-between">
            {Top.map((restaurant,index) => (
                <Item key={index} Top={restaurant} />
            ))}
        </div>

        <h4 className="text-xl font-semibold mt-4"> Restaurants near you </h4>
          <div className="search">
        <input type="text" data-testid="searchInput" className="border-2 border-gray-400 mr-2 rounded-md h-8 p-3 bg-white-800" value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                    />
                    <button className="px-4 py-2 mr-8 my-4 border-2 border-orange-500 rounded-md text-black" onClick={()=>{
                        const filteredRestaurant = resList.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredList(filteredRestaurant);

                    }}> Search </button>
                    
        <button className="px-4 py-1 mx-2 border-2 border-slate-300 rounded-full text-black hover:bg-orange-200" 
        onClick={() => {
          const filteredList = resList.filter (
            (res) => res.info.avgRating > 4.3 
            );
            setFilteredList(filteredList);
            }}
            >Top Rated</button>

<button className="px-4 py-1 mx-2 border-2 border-slate-300 rounded-full text-black hover:bg-orange-300" 
        onClick={() => {
          const filteredList = resList.filter (
            (res) => res.info.cuisines.includes("Indian") 
            );
            setFilteredList(filteredList);
            }}
            > Indian </button>

            
<button className="px-4 py-1 mx-2 border-2 border-slate-300 rounded-full text-black hover:bg-orange-300" 
        onClick={() => {
          const filteredList = resList.filter (
            (res) => res.info.cuisines.includes("South Indian") 
            );
            setFilteredList(filteredList);
            }}
            > South Indian </button>

<button className="px-4 py-1 mx-2 border-2 border-slate-300 rounded-full text-black hover:bg-orange-300" 
        onClick={() => {
          const filteredList = resList.filter (
            (res) => res.info.cuisines.includes("Fast Food") 
            );
            setFilteredList(filteredList);
            }}
            > Fast Food </button>

<button className="px-4 py-1 mx-2 border-2 border-slate-300 rounded-full text-black hover:bg-orange-300" 
        onClick={() => {
          const filteredList = resList.filter (
            (res) => res.info.cuisines.includes("Pizzas") 
            );
            setFilteredList(filteredList);
            }}
            >Pizzas </button>

            
<button className="px-4 py-1 mx-2 border-2 border-slate-300 rounded-full text-black hover:bg-orange-300" 
        onClick={() => {
          const filteredList = resList.filter (
            (res) => res.info.cuisines.includes("Beverages") 
            );
            setFilteredList(filteredList);
            }}
            > Beverages </button>

<button className="px-4 py-1 mx-2 border-2 border-slate-300 rounded-full text-black hover:bg-orange-300" 
        onClick={() => {
          const filteredList = resList.filter (
            (res) => res.info.cuisines.includes("Chinese") 
            );
            setFilteredList(filteredList);
            }}
            > Chinese </button>

<button className="px-4 py-1 mx-2 border-2 border-slate-300 rounded-full text-black hover:bg-orange-300" 
        onClick={() => {
          const filteredList = resList.filter (
            (res) => res.info.cuisines.includes("Biryani") 
            );
            setFilteredList(filteredList);
            }}
            > Biryani </button>

</div>
    
        <div className=" inline md:flex flex-wrap flex-row justify-start ml-4">
         {filteredList?.map((restaurant) =>(
              <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}>
                {setResList.isOpen
                ? (<OfferCard resList={restaurant}/>
                ):(
                <ResCard resList={restaurant}/>)
                }  
              </Link>
            ))}
            </div> 
        </div>
      
    );
};

export default Body;