import { useState } from 'react';
import { IconButton, Button, DialogTitle, Dialog } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Question = (props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [questionCorrect, setQuestionCorrect] = useState(false);

  function toggleDialog(value) {
    setDialogOpen(value);
  }
  
  function checkAnswer(choice, value) {
    const isCorrect = choice.correct;
    setQuestionCorrect(isCorrect);
    if (isCorrect) {
      props.updateScore(props.question.value)
    }
    setQuestionAnswered(true);
    props.answerQuestion();
    toggleDialog(false);
  }

  function handleDialogClick(e) {
    e.stopPropagation();
  }

  return (
    <div className={`category-question ${questionAnswered ? 'completed' : ''} ${questionCorrect ? 'correct' : 'incorrect'}`} onClick={() => questionAnswered ? '' : toggleDialog(true)}>
      <div>
        {questionAnswered ? 
          questionCorrect 
            ? `+$${props.question.value}` 
            : "X" 
        : `$${props.question.value}`}
      </div>
      <Dialog fullWidth
  maxWidth="md" open={dialogOpen} onClose={() => toggleDialog(false)} onClick={handleDialogClick}>
        <div className="category-question-choices-outer">
            <DialogTitle>{props.question.question}</DialogTitle>
            <div className="category-question-choices-inner">
            <IconButton onClick={() => toggleDialog(false)}>
                <CloseIcon />
            </IconButton>
              {props.question.choices.map(((choice, index) => {
                return (
                  <div className="category-question-choice" key={`choice-${choice.answer}`}>
                    <Button variant="contained" onClick={() => checkAnswer(choice)}>
                      <div>{choice.answer}</div>
                    </Button>
                  </div>
                )
              }))}
            </div>
        </div>
      </Dialog>
    </div>
  )
}


export default Question;