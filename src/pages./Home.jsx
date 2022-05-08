import "./home.css";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="Home-container">
        <h1 className="heading textCenter">Let's Play NeoQuiz 🤔</h1>
        <div className="category-container">
        <Link to="/rules">
          <div className="category">
            <img className="cate-img" src="/asset/science3.jpeg" alt="" />
            <div className="game-details">
            <h2 className="textCenter">Science Quiz questions</h2>
            <p className="textCenter">Take the quiz to test yourself</p>
            <p className="textCenter">5 Questions</p>
            </div>
          </div>
          </Link>
          <Link to="/rules">
          <div className="category">
            <img className="cate-img" src="/asset/cricket4.jpeg" alt="" />
            <div className="game-details">
            <h2 className="textCenter">Cricket Quiz questions</h2>
            <p className="textCenter">Take the quiz to test yourself</p>
            <p className="textCenter">5 Questions</p>
            </div>
          </div>
          </Link>
          <Link to="/rules">
          <div className="category">
            <img className="cate-img" src="/asset/maths.jpeg" alt="" />
            <div className="game-details">
            <h2 className="textCenter">Maths Quiz question</h2>
            <p className="textCenter">Take the quiz to test yourself</p>
            <p className="textCenter">5 Questions</p>
            </div>
          </div>
          </Link>
          <Link to="/rules">
          <div className="category">
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
