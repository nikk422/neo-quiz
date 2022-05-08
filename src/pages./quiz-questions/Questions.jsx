import "./questions.css";
import { useNavigate } from "react-router-dom";
import { useQuestion } from "../../context/Question-context";
import { useState } from "react";

const Maths = [
  {
    Ques: "Q1. 50 times 5 is equal to?",
    option: [" A. 2500", "B. 505", "C. 500", "D. None of these"],
    ans: "D. None of these",
  },
  {
    Ques: "Q2. Simplify: 26 + 32 - 12 ?",
    option: ["A. 0", "B. 32", "C. 56", "D. 46"],
    ans: "D. 46",
  },
  {
    Ques: "Q3. Find the product of 72 × 3 ?",
    option: ["A. 216", "B. 7230", "C. 106", "D. 372"],
    ans: "A. 216",
  },
  {
    Ques: "Q4. Simplify :150 ÷ (6 + 3 x 8) - 5 ?",
    option: ["A. 2", "B. 5", "C. 0", "D. None of these"],
    ans: "C. 0",
  },
  {
    Ques: "Q5. Subtract 457 from 832 ?",
    option: ["A. 375", " B. 57", "C. 376", "D. 970"],
    ans: "A. 375",
  },
];

const science = [
  {
    Ques: "Q1. Which of the following is used in pencils?",
    option: ["A. Graphite", "B. Silicon", "C. Charcoal", "D. Phosphorous"],
    ans: "A. Graphite",
  },
  {
    Ques: "Q2. Chemical formula for water is?",
    option: ["A. NaAlO2", "B. H2O", "C.Al2O3", "D.CaSiO3"],
    ans: "B. H2O",
  },
  {
    Ques: "Q3. Washing soda is the common name for?",
    option: [
      "A. Sodium carbonate",
      "B. Calcium bicarbonate",
      "C. Sodium bicarbonate",
      "D. Calcium carbonate",
    ],
    ans: "A. Sodium carbonate",
  },
  {
    Ques: "Q4.Which of the gas is not known as green house gas",
    option: [
      "A.Methane",
      "B. Nitrous oxide",
      "C. Carbon dioxide",
      "D.Hydrogen",
    ],
    ans: "D.Hydrogen",
  },
  {
    Ques: "Q5. What is laughing gas?",
    option: [
      "A. Nitrous Oxide",
      "B.Carbon monoxide",
      "C. Sulphur dioxide",
      "D. Hydrogen peroxide",
    ],
    ans: "A. Nitrous Oxide",
  },
];

const Cricket = [
  {
    Ques: "Q1.  Who won the first ever Cricket World Cup in 1975?",
    option: ["A. Australia", "B. England", "C. India", "D. West Indies"],
    ans: "D. West Indies",
  },
  {
    Ques: "Q2. What is the largest cricket stadium in the world?",
    option: [
      "A. Eden Gardens",
      "B. Melbourne Cricket Club",
      "C. Lords",
      "D Narendra Modi Stadium",
    ],
    ans: "D Narendra Modi Stadium",
  },
  {
    Ques: "Q3. What is the nickname of Sachin Tendulkar?",
    option: [
      "A. The Little Genius",
      "B. The Little Master",
      "C. The God of Cricket",
      "D. Master Blaster",
    ],
    ans: "D. Master Blaster",
  },
  {
    Ques: "Q4. Who did England beat in the final of the 2019 Cricket World Cup?",
    option: ["A. Australia", "B. Shri Lanka", "C. New Zealand", "D. India"],
    ans: "C. New Zealand",
  },
  {
    Ques: "Q5. Kapil Dev did not play for India during the World Cup tournament held in?",
    option: ["A.1975", "B. 1979", "C. 1983", "D. 1987"],
    ans: "D. 1987",
  },
];

const English = [
  {
    Ques: "Q1. There aren't ______ people here.?",
    option: ["A. much", "B. many", "C. a lot", "D. some"],
    ans: "B. many",
  },
  {
    Ques: "Q2. He's interested ______ learning Spanish?",
    option: ["A. on", "B. to", "C. in", "D. for"],
    ans: "C. in",
  },
  {
    Ques: "Q3. If only I ______ richer.",
    option: ["A.am", "B. were", "C.would be", "D.will be"],
    ans: "B. were",
  },
  {
    Ques: "Q4. I don't like coffee ______ do I.?",
    option: ["A. So", "B. Neither", "C.Either", "D. No"],
    ans: "B. Neither",
  },
  {
    Ques: "Q5.You should ______ your homework ?",
    option: ["A.make","B. do","C.work","D. give"],
    ans: "C. do",
  },
];

const Questions = () => {

  const navigate = useNavigate();
  const { Question, name,disableBtn, setScore,setDisableBtn} = useQuestion();
  const [count, setCount] = useState(0);

  const optionHandler = (opt) => {
        setDisableBtn(true)
    if (Question[count].ans === [opt]) {
      setScore(score=>score + 2);
    };

  };

  const nextBtnHandler = () => {
    setDisableBtn(false)
    setCount(prev => prev+1)
    return (
      (count === 4 ) ? navigate("/result") : ""
    )
  }
  return (

    <section className="quiz-container">
      <h1 className="heading">"Hello {name} are you Ready for Quiz???"</h1>
      <div className="questions-contain">
      <h2 className="questions ">
         {Question[count].Ques}
      </h2>
      <ol className="questions-child">
        {Question[count].option.map((opt) => (
          <li>
            <button
              onClick={() => {
                optionHandler(opt);
              }}
              className="mcq-ans btn"  disabled={disableBtn}
            >
              {opt}
            </button>
          </li>
        ))}
      </ol>
      </div>
      <button  className="submitBtn" onClick={nextBtnHandler}>
        {count === 4 ? "Submit" : "Next"}
      </button>
    </section>
  );
};
export { Questions, Maths, science, Cricket, English };