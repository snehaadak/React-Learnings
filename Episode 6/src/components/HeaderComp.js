import { LOGO_URL } from "../../Utilities/constants";
import { useState } from "react";

const HeaderComp = () => { 
    const [btnName, setbtnName] = useState("Login")

    console.log("Whole Header Rendered")

    return(
        <div className="header">
            <div className="logo-container"> 
                <img className="logo" src = {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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
