import {createContext, useContext, useState} from 'react';
import {Maths} from "../pages./quiz-questions/Questions";

const QuestionContext = createContext();

const QuestionProvider = ({ children }) => {
    const [Question , setQuestion]=useState(Maths);
    const [name, setName]=useState("")
    const [score , setScore]=useState(0);
    const [disableBtn, setDisableBtn]=useState(false);
    return(
        <QuestionContext.Provider value={{Question, name,score,disableBtn,setQuestion,setName,setScore,setDisableBtn}}>
        {children}
      </QuestionContext.Provider>
    )
};
const useQuestion=()=>useContext(QuestionContext);

export {QuestionProvider, useQuestion};
