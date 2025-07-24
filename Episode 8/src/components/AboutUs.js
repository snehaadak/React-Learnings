import User from "./User";
import UserClass from "../components/UserClass";

const AboutUs = () => {
    return (
        <div>
            <h1>About the Developer</h1>
            <User content="functional component"/>
            <UserClass content="Class based component"/>
        </div>
    );
};

export default AboutUs;