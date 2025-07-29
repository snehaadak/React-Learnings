import { useState, useEffect } from "react"
import {MENUID_URL} from "../../Utilities/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestuarantMenu from "../../Utilities/useRestuarantMenu";   //Custom Hook
import ResturantCategory from "./ResturantCategory";

const RestuarantMenu = () =>{

    // const [resInfo , setresInfo] = useState(null)

    const {resID} = useParams();

    const resInfo = useRestuarantMenu(resID);

    // useEffect(()=>{
    //     fetchMenu();
    // },[]);

    // const fetchMenu = async ()=> {

    //     const data = await fetch (MENUID_URL + resID)
    //     const json = await data.json();

    //   setresInfo(json.data)

    // };

     if(resInfo===null) return <Shimmer/>

     

    const {name, avgRating, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info
    const regularCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // const carousel = regularCards?.[1]?.card?.card?.carousel;
    const itemCards = regularCards?.[1]?.card?.card?.itemCards;

    console.log(regularCards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    
    return (


    <div className ="m-5 mb-3 flex flex-col items-center">

        <div className="rounded-md p-1 pl-5 m-1 w-200 h-30 bg-blue-100 gap-[50px] shadow">
            <h2 className="text-3xl font-bold pb-3 pt-3">{name} (Rating: {avgRating})</h2>
            <h3 className="text-xl">{cuisines.join(", ")} - {costForTwoMessage}</h3>
        </div>

         {categories.map((category) => 
            (<ResturantCategory data={category?.card.card}/>))}

        

{/* The below part is not working as the swiggys api in someplaces uses the carousel and in some its using itemcards */}

            {/* {carousel
                ? carousel.map((item, index) => (
                    <div className="menu" key={`${item.dish.info.id}-${index}`}>
                        <div className="border-black-1 rounded-md mt-5 p-1 w-[750px] bg-green-80">
                            <h3 className="font-bold">{item.dish.info.name}</h3>
                            <p>{item.dish.info.description}</p>
                        </div>
                    </div>
                    )) */}

                 {/* {itemCards?.map((item, index) => (
                    <div className="menu" key={`${item.card.info.id}-${index}`}>
                        <div className="border-black rounded-md mt-5 p-1 w-[750px] bg-green-80">
                            <h3 className="font-bold">{item.card.info.name}</h3>
                            <p>{item.card.info.description}</p>
                        </div>
                    </div>
                    ))
                } */}

        </div>
);};

export default RestuarantMenu