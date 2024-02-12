import User from "./User"
import UserClass from "./UserClass"
const About = () => {
    return(
        <div>
            <h1>About</h1>
            <h2>This is the about page</h2>
            <User name={"Praveen"} location={"Angamaly"}/>
            <UserClass name={"Ann"} location={"Angamaly"} />
        </div>
    )
}

export default About