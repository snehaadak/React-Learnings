import { CDN_URL } from "../../Utilities/constants";

const RestroCard = (props) => {
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    return (
        <div className="w-72 bg-gray-200 p-4 rounded-lg hover:shadow hover:border-black cursor-pointer">
            <img alt="RestroLogo" className="w-full rounded mb-2" src= {CDN_URL + cloudinaryImageId}></img>
            <h3 className="font-bold text-xl">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

export default RestroCard;