import React from 'react';

type QuizzQuestionsProps = {
  question: string
}

const QuizzQuestions = ({ question }: QuizzQuestionsProps) => {
  return (
    <h3>{ question }</h3>
  )
}

export default QuizzQuestions;