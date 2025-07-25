import RestroCard from "./RestroCard.JS";
import CuisineChoices from "./CuisineChoices";
import { useState} from "react";
import { useEffect } from "react";
// import resList from "../../Utilities/mockData";
import Shimmer from "./Shimmer";




const BodyComp = () => {

    const [resList, setresList] = useState([]);
    const [filteredList,setfilteredList] = useState([]);

    const [searchText, setsearchText] = useState("")

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

//Shimmer UI Component
  if (resList.length === 0){
    return <Shimmer/>;
  }  
    
    return (
        <div className="body">
            <div className="basicThings">

                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                        onChange={(e)=>{setsearchText(e.target.value)}}/>
                    <button 

                    onClick = {()=>{
                        const filteredList = resList.filter(
                         (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                         setfilteredList(filteredList)
                    }}>Search</button>
                </div>


                <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = resList.filter(
                      (res)=>res.info.avgRating > 4.3);
                     setfilteredList(filteredList);}}> Top Rated Restuarant</button>
                </div>
            </div>                
                
            <h3>What's On Your Mind?</h3>
            <div className="cusine-choices">
                <CuisineChoices/>
            </div>
            <h3>Restuarants at your Door-steps?</h3>
            <div className="restro-Container">

                {
                    filteredList.map(restuarant => <RestroCard key={restuarant.info.id} resData = {restuarant}/>)
                }
            </div>
            
        </div>
    );
};

export default BodyComp;