import React, { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import { QuestionTimer } from "./QuestionTimer.jsx";

const Quiz = () => {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = userAnswer.length;

  
  const handleActiveQuestionAnswer = useCallback((selectedAnswer) => {
    setUserAnswer((prevState) => {
      return [...prevState, selectedAnswer];
    });
  }, []);

  const handleQuestionTimer = useCallback(() => {
    handleActiveQuestionAnswer(null);
  }, [handleActiveQuestionAnswer]);
  const quizComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="quiz complete" />
        <h2>Quiz is Complete!</h2>
      </div>
    );
  }

  const shuffledOptions = [...QUESTIONS[activeQuestionIndex].answers]; // to display options in random order

  shuffledOptions.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          timeOut={10000}
          onTimeout={handleQuestionTimer}
         key={activeQuestionIndex}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledOptions.map((ans) => {
            return (
              <li key={ans} className="answer">
                <button onClick={() => handleActiveQuestionAnswer(ans)}>
                  {ans}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
