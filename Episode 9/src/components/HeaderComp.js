import { Link } from "react-router-dom";
import { LOGO_URL } from "../../Utilities/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utilities/useOnlineStatus";


const HeaderComp = () => { 
    const [btnName, setbtnName] = useState("Login")

    const onlineStatus = useOnlineStatus();

    return(
        <div className="header">
            <div className="logo-container"> 
                <img className="logo" src = {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Network Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/grocery">Grocery Section</Link></li>
                    <li>Cart</li>

                    <li><button className="login"
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
