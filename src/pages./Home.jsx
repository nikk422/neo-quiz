import Navbar from "../Componants/navbar/Navbar";
import Footer from "../Componants/footer/Footer";
import "./home.css";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="Home-container">
        <h1 className="heading">Let's Play NeoQuiz 🤔</h1>
        <div className="category-container">
        <Link to="">
          <div className="category">
            <img className="cate-img" src="/asset/science3.jpeg" alt="" />
            <div className="game-details">
            <h2>Science Quiz questions</h2>
            <p>Take the quiz to test yourself</p>
            <p>5 Questions</p>
            </div>
          </div>
          </Link>
          <Link to="">
          <div className="category">
            <img className="cate-img" src="/asset/cricket4.jpeg" alt="" />
            <div className="game-details">
            <h2>Cricket Quiz questions</h2>
            <p>Take the quiz to test yourself</p>
            <p>5 Questions</p>
            </div>
          </div>
          </Link>
          <Link to="">
          <div className="category">
            <img className="cate-img" src="/asset/maths.jpeg" alt="" />
            <div className="game-details">
            <h2>Maths Quiz question</h2>
            <p>Take the quiz to test yourself</p>
            <p>5 Questions</p>
            </div>
          </div>
          </Link>
          <Link to="">
          <div className="category">
            <img className="cate-img" src="/asset/english.jpeg" alt="" />
            <div className="game-details">
            <h2>English Quiz question</h2>
            <p>Take the quiz to test yourself</p>
            <p>5 Questions</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
