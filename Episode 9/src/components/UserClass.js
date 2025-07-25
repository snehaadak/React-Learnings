import React from "react";

class UserClass extends React.Component{

    constructor(props) {
            super(props);

            this.state = {
                userInfo : {
                    name : "Dummy Name",
                    location: "Default Location "
                },
                count : 0
            }      
        }


    async componentDidMount() {

            const data = await fetch ("https://api.github.com/users/snehaadak");
            const json = await data.json();

            this.setState ({
                userInfo : json
            })
        }

        
    render(){

        const {name, location} = this.state.userInfo

        return (
            <div className="user-card">
            <h2>{name}</h2>
            <h4>{location}</h4>
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