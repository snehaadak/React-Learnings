import RestroCard, {recommended} from "./RestroCard.JS";
import CuisineChoices from "./CuisineChoices";
import { useState} from "react";
import { useEffect } from "react";
// import resList from "../../Utilities/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utilities/useOnlineStatus";




const BodyComp = () => { 

    const [resList, setresList] = useState([]);
    const [filteredList,setfilteredList] = useState([]);

    const [searchText, setsearchText] = useState("")

    const RecommendedRestro = recommended(RestroCard);

    console.log(resList)

//UseEffect Part
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=> {
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6352143&lng=73.7670914&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        const json = await data.json();

        //optional Chaining
        setresList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
        return (
        <h1>Oops! Looks like you are not connected to Network connection</h1>);
    

//Shimmer UI Component
  if (resList.length === 0){
    return <Shimmer/>;
  }  
    
    return (
        <div className="body">
            <div className="flex">

                <div className="p-5">
                    <input type="text" className="rounded-2xl border-1 pl-4" value={searchText}
                        onChange={(e)=>{setsearchText(e.target.value)}}/>
                    <button className="rounded-2xl border-1 w-15 ml-3"

                    onClick = {()=>{
                        const filteredList = resList.filter(
                         (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                         setfilteredList(filteredList)
                    }}>Search</button>
                </div>


                <div className="p-5">
                <button className="rounded-2xl border-1 ml-30 w-50 hover:cursor-pointer shadow hover:shadow-amber-500" onClick={()=>{
                    const filteredList = resList.filter(
                      (res)=>res.info.avgRating > 4.3);
                     setfilteredList(filteredList);}}> Top Rated Restuarant</button>
                </div>
            </div>                
                
            <h3 className="pl-10 pt-5 text-2xl">What's On Your Mind?</h3>
            <div className="mb-7">
                <CuisineChoices/>
            </div>
            <h3 className="pl-10 pt-5 text-2xl">Restuarants at your Door-steps?</h3>
            <div className= "grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] justify-start gap-6 p-6">

                {
                    filteredList.map(restuarant => 
                    <Link key={restuarant.info.id} to={"/restuarants/"+ restuarant.info.id} >
                        
                        {restuarant.info.avgRating >= 4.3 ? <RecommendedRestro resData = {restuarant}/> : <RestroCard resData = {restuarant}/>}
                        </Link> )
                }
            </div>
            
        </div>
    );
};

export default BodyComp;