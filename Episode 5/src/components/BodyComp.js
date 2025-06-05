import RestroCard from "./RestroCard.JS";
import CuisineChoices from "./CuisineChoices";
import { useState } from "react";
import resList from "../../Utilities/mockData";




const BodyComp = () => {

    const [varResList, setresList] = useState(resList);

    return (
        <div className="body">
            <div className="basicThings">
                <div className="search">Search</div>
                <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = varResList.filter(
                      (res)=>res.info.avgRating > 4.3);
                     setresList(filteredList);}}> Top Rated Restuarant</button>
                </div>
            </div>                
                
            <h3>What's On Your Mind?</h3>
            <div className="cusine-choices">
                <CuisineChoices/>
            </div>
            <h3>Restuarants at your Door-steps?</h3>
            <div className="restro-Container">

                {
                    varResList.map(restuarant => <RestroCard key={restuarant.info.id} resData = {restuarant}/>)
                }
            </div>
            
        </div>
    );
};

export default BodyComp;