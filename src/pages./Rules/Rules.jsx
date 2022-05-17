import "./rules.css";
import {Link} from "react-router-dom";
const Result=()=>{
    return(
        <div className="Rules-container">
            <div className="rules-contain">
            <img className="rules-img" src="/asset/rules1.png" alt=""/>           
            <ol className="rules-list">
                <li>There are total 5 questions in this section.</li>
                <li>For Each correct answer there will be 2 point.</li>
                <li>For Each incorrect answer there will be 0 point.</li>
                <li>You may not change the option once opted</li>
            </ol>
            <Link to="/question">
                <button className="start-btn headHover">Start Quiz..</button>
            </Link>
            </div>
 
        </div>
    )
}

export default Result;