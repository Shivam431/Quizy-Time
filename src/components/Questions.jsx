import React, { useState } from "react";
import { QuestionTimer } from "./QuestionTimer";
import { Answers } from "./Answers";

import QUESTIONS from "../questions";
export const Questions = ({ onSelectAns, onSkipAns, index }) => {
  const [ansState, setAnsState] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let TIMER = 10000;

  if (ansState.selectedAnswer) {
    TIMER = 1000;
  }

  if (ansState.isCorrect !== null) {
    TIMER = 2000;
  }
  const handleSelectAnswer = (ans) => {
    setAnsState({
      selectedAnswer: ans,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnsState({
        selectedAnswer: ans,
        isCorrect: QUESTIONS[index].answers[0] === ans,
      });
      setTimeout(() => {
        onSelectAns(ans);
      }, 2000);
    }, 1000);
  };

  let answerState = "";
  if (ansState.selectedAnswer && ansState.isCorrect !== null) {
    answerState = ansState.isCorrect ? "correct" : "wrong";
  } else if (ansState.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <div id="question">
      <QuestionTimer
        timeOut={TIMER}
        onTimeout={ansState.selectedAnswer === "" ? onSkipAns: null}
        mode={answerState}
        key={TIMER}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={ansState.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
};
