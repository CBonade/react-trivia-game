import { useState } from 'react';
import { IconButton, Button, DialogTitle, Dialog } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Question = (props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  function toggleDialog(value) {
    console.log(value);
    setDialogOpen(value);
  }
  
  function checkAnswer() {
    setQuestionAnswered(true);
    toggleDialog(false);
  }

  function handleDialogClick(e) {
    e.stopPropagation();
  }

  return (
    <div className={`category-question ${questionAnswered ? 'completed' : ''}`} onClick={() => questionAnswered ? '' : toggleDialog(true)}>
      <div>
        {questionAnswered ? "Completed" : `$${props.question.value}`}
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
                  <div className="category-question-choice" key={`choice-${choice}`}>
                    <Button variant="contained" onClick={checkAnswer}>
                      <div>{choice}</div>
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