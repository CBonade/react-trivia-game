

const category = (props) => {
  return (
    <div className="category-column">
      <div className="category-header">
        {props.category}
      </div>
      <div className="category-questions">
      {props.questions.map((question, index) => {
          return (<div key={`category-${props.categoryIndex}-question-${index}`} className="category-question">
            {question.question}
          </div>)
        })
      }
      </div>
    </div>
  )
}

export default category;