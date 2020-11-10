import React, { useState } from 'react';

import QuizzQuestions from '../quizzQuestions/quizz.questions.component';

import QuizzAnswer from '../quizzAnswer/quizz.answer.component';

import { DataType} from '../../redux/types/index'

type QuizzProps = {
  data: DataType
}

const Quizz = ({ data }: QuizzProps) => {
  let [valueInput, setValueInput]: [any, any] = useState([]);

  const [totalScore, setTotalScore] = useState(0);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const total = valueInput.reduce((a: number, b: number) => a + b, 0);
    setTotalScore(total);
    // console.log(total);
    // console.log(typeof (e.target));
    // console.log( (e.target));
  }

  const arrayRemove = (arr: any[], value: number | string): any => {
    return arr.filter(ele => {
      return ele !== value;
    })
  }

  const handleChangeInput = (event: any) => {
    const target = event.target;
    let value = Number(target.value);

    console.log(target.checked);
    if (target.checked) {
      valueInput.push(value);
      setValueInput(valueInput);
    } else {
      valueInput = arrayRemove(valueInput, value);
      setValueInput(valueInput);
    }

    console.log(valueInput);
  }

  return (
    <>
      <form action="" id="form" onSubmit={handleFormSubmit}>
        {
          data.listQuestion.map((item: any) => (
            <>
              <QuizzQuestions question={item.question} />
              <QuizzAnswer
                handleChange={handleChangeInput}
                answer={item.answerList}
              />
            </>
          ))
        }
        <button type="submit">Submit</button>
      </form>
      {
        (0 < totalScore && totalScore <= 20) ? (
          <>
            <div>Tính cách của bạn là: </div>
            <p>{data.result["20"]}</p>
          </>
        ) : (20 < totalScore && totalScore <= 30) ? (
          <>
            <div>Tính cách của bạn là: </div>
              <p>{data.result["21-30"]}</p>
          </>
          ) : (30 < totalScore && totalScore <= 40) ? (
            <>
              <div>Tính cách của bạn là: </div>
              <p>{data.result["31-40"]}</p>
            </>
          ) : (40 < totalScore && totalScore <= 50) ? (
            <>
              <div>Tính cách của bạn là: </div>
              <p>{data.result["41-50"]}</p>
            </>
          ) : (50 < totalScore && totalScore <= 60) ? (
            <>
              <div>Tính cách của bạn là: </div>
              <p>{data.result["51-60"]}</p>
            </>
          ) : (60 < totalScore && totalScore <= 200) ? (
            <>
              <div>Tính cách của bạn là: </div>
              <p>{data.result["61-200"]}</p>
            </>
          ) : ''
      }
    </>
  )
}

export default Quizz;