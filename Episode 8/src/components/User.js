import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div className="user-card">
            <h2>Name: Sneha Adak</h2>
            <h4>Location: Pune, Mahrashtra</h4>
            <h4>Contact: @snehaadak</h4>
            <h4>This is {props.content}</h4>
            <h4>State Variable: {count}</h4>
            <button onClick={()=> {
                setCount(count + 1)
            }}>Count Increase</button>
        </div>
    );
};

export default User;