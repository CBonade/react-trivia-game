import '../App.css';
import {useEffect } from 'react'
import Category from '../components/category.js'

function StartGame(props) {
  return (
    <div className="App">
      <div className="category-board">
        <div className="category-board-inner">
          {props.categories.map((category, index) => (
            <Category key={`category-${index}`} categoryIndex={index} category={category.name} questions={props.questions.filter(question => question.category.toLowerCase() === category.name.toLowerCase())} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StartGame;