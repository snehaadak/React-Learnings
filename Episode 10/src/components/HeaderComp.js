import { Link } from "react-router-dom";
import { LOGO_URL } from "../../Utilities/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utilities/useOnlineStatus";


const HeaderComp = () => { 
    const [btnName, setbtnName] = useState("Login")

    const onlineStatus = useOnlineStatus();

    return(
        <div className="flex justify-between border-1 m-3 rounded-3xl">
            <div className="logo-container"> 
                <img className="w-30 pt-2 pl-2" src = {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-2">
                    <li className="p-4 font-serif">Network Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="p-4 font-serif"><Link to ="/">Home</Link></li>
                    <li className="p-4 font-serif"><Link to="/about">About Us</Link></li>
                    <li className="p-4 font-serif"><Link to="/grocery">Grocery Section</Link></li>
                    <li className="p-4 font-serif">Cart</li>

                    <li className="p-4 font-serif"><button className="border-2 w-20 bg-gray-300 rounded-2xl"
                        onClick = {() => { 
                            btnName === "Login"       // Turnary Operator Condition
                            ? setbtnName("Logout")    // If True do this
                            : setbtnName("Login")     // Else do this
                        }}>{btnName}</button></li>
                        
                </ul>
            </div>
        </div>
    );
};

export default HeaderComp;
