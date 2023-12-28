import React, { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import { Questions } from "./Questions.jsx";
import { Summary } from "./Summary.jsx";

const Quiz = () => {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;
  const quizComplete = activeQuestionIndex === QUESTIONS.length;
  const handleActiveQuestionAnswer = useCallback((selectedAnswer) => {
    setUserAnswer((prevState) => {
      return [...prevState, selectedAnswer];
    });
  }, []);

  const handleQuestionTimer = useCallback(() => {
    handleActiveQuestionAnswer(null);
  }, [handleActiveQuestionAnswer]);
  
  if (quizComplete) {
    return (
     <Summary userAns={userAnswer}/>
    );
  }

  return (
    <div id="quiz">
      <Questions
        key={activeQuestionIndex}
        onSelectAns={handleActiveQuestionAnswer}
        onSkipAns={handleQuestionTimer}
        index={activeQuestionIndex}
      />
    </div>
  );
};

export default Quiz;
