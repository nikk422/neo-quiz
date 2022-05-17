import "./home.css";
import {Link} from "react-router-dom";
import { useQuestion } from "../context/Question-context";
import {Maths , science, Cricket,English} from "./quiz-questions/Questions";


const Home = () => {
  const {setName, setQuestion}=useQuestion();

  return (
    <div>
      <div className="Home-container">
      <div className="home-heading">
        <h1 className="heading textCenter">Let's Play NeoQuiz 🤔</h1>
        <h3 className="textCenter">Enter your Name here:-</h3>
          <input type="text" className="input-box textCenter" placeholder="Enter your Name"onChange={(e)=>setName(e.target.value)}  />
        </div>
        <div className="category-container">
        <Link to="/rules">
          <div onClick={()=>setQuestion(science)} className="category">
            <img className="cate-img" src="/asset/science3.jpeg" alt="" />
            <div className="game-details">
            <h2 className="textCenter">Science Quiz questions</h2>
            <p className="textCenter">Take the quiz to test yourself</p>
            <p className="textCenter">5 Questions</p>
            </div>
          </div>
          </Link>
          <Link to="/rules">
          <div onClick={()=>setQuestion(Cricket)} className="category">
            <img className="cate-img" src="/asset/cricket4.jpeg" alt="" />
            <div className="game-details">
            <h2 className="textCenter">Cricket Quiz questions</h2>
            <p className="textCenter">Take the quiz to test yourself</p>
            <p className="textCenter">5 Questions</p>
            </div>
          </div>
          </Link>         
          <Link to="/rules">
          <div onClick={()=>setQuestion(Maths)} className="category">
            <img className="cate-img" src="/asset/maths.jpeg" alt="" />
            <div className="game-details">
            <h2 className="textCenter">Maths Quiz question</h2>
            <p className="textCenter">Take the quiz to test yourself</p>
            <p className="textCenter">5 Questions</p>
            </div>
          </div>
          </Link>
          <Link to="/rules">
          <div onClick={()=>setQuestion(English)} className="category">
            <img className="cate-img" src="/asset/english.jpeg" alt="" />
            <div className="game-details">
            <h2 className="textCenter">English Quiz question</h2>
            <p className="textCenter">Take the quiz to test yourself</p>
            <p className="textCenter">5 Questions</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
