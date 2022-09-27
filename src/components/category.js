import {useState, useEffect} from 'react';
 
 
const Category = (props) => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const values = [200, 400, 600, 800, 1000];
  function handleQuestions(questions) {
    return questions.sort(() => Math.random() - 0.5);
  }

  function selectQuestions() {
    const randomizedQuestions = handleQuestions(props.questions).slice(0,4).map((question, index) => ({...question, value:values[index]}));
    console.log(randomizedQuestions)
    setSelectedQuestions([...randomizedQuestions]);
  }

  useEffect(() => {
    selectQuestions();
  }, [props.questions])

  return (
    <div className="category-column">
      <div className="category-header">
        {props.category}
      </div>
      <div className="category-questions">
      {selectedQuestions.map((question, index) => {
          return (<div key={`category-${props.categoryIndex}-question-${index}`} className="category-question">
            ${question.value}
          </div>)
        })
      }
      </div>
    </div>
  )
}

export default Category;