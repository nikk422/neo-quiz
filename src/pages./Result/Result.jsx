import "./result.css";
import { useQuestion } from "../../context/Question-context";

const Result = () => {
  const { Question,name,score } = useQuestion();

  return (
    <div className="result-container">
      <h1 className="score-heading">Hey {name}  your Result Score is :- {score}/10</h1>
      <div className="questions-cont">
        {Question.map((que) => (
          <div className="ques">
            <h2>{que.Ques}</h2>
            <ol className="questions-child">
              {que.option.map((opt,index) => (
                <li className="mcq-ans" id={que.ans===index ? "bg-color" : ""}>{opt}</li>
              ))}
            </ol>
            <hr />
          </div>
        ))}
      </div>
      <h1>Thank you for Attempt quiz</h1>
    </div>
  );
};

export default Result;
