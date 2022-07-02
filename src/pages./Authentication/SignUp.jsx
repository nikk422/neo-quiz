import "./sign.css";
import {Link} from "react-router-dom";


 const SignUp=()=>{
  
    return(
        <div className=" sign-container"> 
        <div className="login">
            <h1><strong> Sign Up</strong></h1>
            <label htmlFor="email">
                Email address:-
                <input type="email" placeholder="Enter your Email" className="authEmail authLable"></input>
            </label>
            <div className="emialContain">   
            <label htmlFor="First Name">
                First Name
                <input type="text" placeholder="Enter your first name" className="authEmail "></input>
            </label>
            <label htmlFor="lastName">
                Last Name
                <input type="text" placeholder="Enter your last name" className="authEmail "></input>
            </label>
            </div>
            <div className="emialContain">
            <label htmlFor="new-password">
                New Password
                <input type="password" placeholder="**********" className="authEmail "></input>
            </label>
            <label htmlFor="confirm-password">
                Confirm Password
                <input type="password" placeholder="********" className="authEmail "></input>
            </label>
            </div>
            <label htmlFor="terms-conditions">
                <input type="checkbox" name="terms-conditions" className="ConditionBtn"></input>
                I accept all Terms & Conditions
            </label>
            <button className="logBlue">Login</button>
            <Link to="/Login">
            <button className="alreadyAcount">Already have an Acount</button>
            </Link>
        </div>
    </div>
        )
}
export default SignUp;