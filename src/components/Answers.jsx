import {useRef} from 'react'

export const Answers = ({answers,selectedAnswer,answerState,onSelect}) => {
    const shuffledOptions = useRef();
    if (!shuffledOptions.current) {
        shuffledOptions.current = [...answers]; // to display options in random order
    
        shuffledOptions.current.sort(() => Math.random() - 0.5);
      }
  return (
    <ul id="answers">
          {shuffledOptions.current.map((ans) => {
            const isSelected = selectedAnswer === ans;
             let cssClasses='';
             if(answerState==='answered' && isSelected){
                cssClasses='selected'
             }

             if((answerState === 'correct'|| answerState ==='wrong') && isSelected){
                cssClasses=answerState
             }
            return (
               
              <li key={ans} className="answer">
                <button onClick={() => onSelect(ans)} className={cssClasses} disabled={answerState !==''}>
                  {ans}
                </button>
              </li>
            );
          })}
        </ul>
  )
}
