import React from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
export const Summary = ({ userAns }) => {
  const skippedAns = userAns.filter((ans) => ans === null);
  const correctAns = userAns.filter((ans,index)=> ans===QUESTIONS[index].answers[0])

  const skipShare = Math.round(
    (skippedAns.length/userAns.length)*100
  )

  const correctShare = Math.round(
    (correctAns.length/userAns.length)*100
  )

  const wrongShare= 100 - skipShare-correctShare;
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="quiz complete" />
      <h2>Quiz is Complete!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skipShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongShare}%</span>
          <span className="text">answered wrong</span>
        </p>
      </div>
      <ol>
        {userAns.map((ans, index) => {
          let cssClass = "user-answer";

          if (ans === null) {
            cssClass += " skipped";
          } else if (ans === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{ans ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
