import React from "react";

class UserClass extends React.Component{

    constructor(props) {
            super(props);

            this.state = {
                count: 0
            }      
        }

    render(){

        return (
            <div className="user-card">
            <h2>Name: Sneha Adak</h2>
            <h4>Location: Pune, Mahrashtra</h4>
            <h4>Contact: @snehaadak</h4>
            <h4>This is {this.props.content}</h4>
            <h4>State Variable:{this.state.count}</h4>
            <button onClick={()=>{
                    //Updating a state variable inside a Class component
                    this.setState({
                        count: this.state.count +1
                    })
                }}>Count Increase</button>
        </div>
        )
    }
}

export default UserClass;