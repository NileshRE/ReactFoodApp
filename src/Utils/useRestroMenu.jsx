import { useEffect, useState } from "react";
import { Menu_API } from "./constant";

const useRestroMenu=(resId)=>{

    const [resInfo, setresInfo] = useState(null);
    useEffect(()=>{
        fetchData();
},[]);

const fetchData= async ()=>{
    const data = await fetch(Menu_API+resId);

    const json= await data.json();
    setresInfo(json.data);
}
    return resInfo;
}

export default useRestroMenu;