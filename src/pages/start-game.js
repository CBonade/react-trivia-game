import '../App.css';
import {useEffect, useState } from 'react'
import Category from '../components/category.js'

function StartGame(props) {
  const [playerScore, setPlayerScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  function updatePlayerScore(value) {
    console.log(value);
    const newScore = playerScore + value;
    setPlayerScore(newScore);
  }

  function answerQuestion() {
    const newQuestionsAnswered = questionsAnswered + 1;
    setQuestionsAnswered(newQuestionsAnswered);
  }

  return (
    <div className="App">
      <div className="category-board-header">
          <h2>Score: ${playerScore}</h2>
        </div>
      <div className="category-board">
        
        <div className="category-board-inner">
          {props.categories.map((category, index) => (
            <Category 
              key={`category-${index}`} 
              categoryIndex={index} 
              category={category.name} 
              questions={props.questions.filter(question => question.category.toLowerCase() === category.name.toLowerCase())} 
              updateScore={updatePlayerScore}
              answerQuestion={answerQuestion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StartGame;