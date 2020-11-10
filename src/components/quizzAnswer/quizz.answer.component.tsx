import React, { useState } from 'react';
import { Answer } from '../../redux/types/index';

type QuizzAnswerProps = {
  answer: Answer[],
  handleChange: any
}

const QuizzAnswer = ({ answer, handleChange }: QuizzAnswerProps) => {

  const [isCheckedA, setIsCheckedA] = useState(false);
  const [isCheckedB, setIsCheckedB] = useState(false);
  const [isCheckedC, setIsCheckedC] = useState(false);
  const [isCheckedD, setIsCheckedD] = useState(false);
  const [isCheckedE, setIsCheckedE] = useState(false);
  const [isCheckedF, setIsCheckedF] = useState(false);
  const [isCheckedG, setIsCheckedG] = useState(false);

  return (
    <div>
      {
        <div className="checkbox">
          <input type="checkbox"
            value={answer[0].score}
            disabled={
              (
                isCheckedB === true ||
                isCheckedC === true ||
                isCheckedD === true ||
                isCheckedE === true ||
                isCheckedF === true ||
                isCheckedG === true
              ) ? true : false
            }
            checked={isCheckedA}
            onChange={(event) => {
              setIsCheckedA(!isCheckedA);
              handleChange(event);
            }}
          />
          {answer[0].answer}
        </div>
      }
      {
        <div className="checkbox">
          <input type="checkbox"
            value={answer[1].score}
            disabled={
              (
                isCheckedA === true ||
                isCheckedC === true ||
                isCheckedD === true ||
                isCheckedE === true ||
                isCheckedF === true ||
                isCheckedG === true
              ) ? true : false
            }
            checked={isCheckedB}
            onChange={(event) => {
              setIsCheckedB(!isCheckedB);
              handleChange(event);
            }}
          />
          {answer[1].answer}
        </div>
      }
      {
        <div className="checkbox">
          <input type="checkbox"
            value={answer[2].score}
            checked={isCheckedC}
            disabled={
              (
                isCheckedA === true ||
                isCheckedB === true ||
                isCheckedD === true ||
                isCheckedE === true ||
                isCheckedF === true ||
                isCheckedG === true
              ) ? true : false
            }
            onChange={(event) => {
              setIsCheckedC(!isCheckedC);
              handleChange(event);
            }}
          />
          {answer[2].answer}
        </div>
      }
      {
        answer.length === 4 ? (
          <div className="checkbox">
            <input type="checkbox"
              value={answer[3].score}
              checked={isCheckedD}
              disabled={
                (
                  isCheckedA === true ||
                  isCheckedB === true ||
                  isCheckedC === true ||
                  isCheckedE === true ||
                  isCheckedF === true ||
                  isCheckedG === true
                ) ? true : false
              }
              onChange={(event) => {
                setIsCheckedD(!isCheckedD);
                handleChange(event);
              }}
            />
            {answer[3].answer}
          </div>
        ) : ''
      }
      {
        answer.length === 5 ? (
          <>
            <div className="checkbox">
              <input type="checkbox"
                value={answer[3].score}
                checked={isCheckedD}
                disabled={
                  (
                    isCheckedA === true ||
                    isCheckedB === true ||
                    isCheckedC === true ||
                    isCheckedE === true ||
                    isCheckedF === true ||
                    isCheckedG === true
                  ) ? true : false
                }
                onChange={(event) => {
                  setIsCheckedD(!isCheckedD);
                  handleChange(event);
                }}
              />
              {answer[3].answer}
            </div>
            <div className="checkbox">
              <input type="checkbox"
                value={answer[4].score}
                checked={isCheckedE}
                disabled={
                  (
                    isCheckedA === true ||
                    isCheckedB === true ||
                    isCheckedC === true ||
                    isCheckedD === true ||
                    isCheckedF === true ||
                    isCheckedG === true
                  ) ? true : false
                }
                onChange={(event) => {
                  setIsCheckedE(!isCheckedE);
                  handleChange(event);
                }}
              />
              {answer[4].answer}
            </div>
          </>
        ) : ''
      }
      {
        answer.length === 6 ? (
          <>
            <div className="checkbox">
              <input type="checkbox"
                value={answer[3].score}
                checked={isCheckedD}
                disabled={
                  (
                    isCheckedA === true ||
                    isCheckedB === true ||
                    isCheckedC === true ||
                    isCheckedE === true ||
                    isCheckedF === true ||
                    isCheckedG === true
                  ) ? true : false
                }
                onChange={(event) => {
                  setIsCheckedD(!isCheckedD);
                  handleChange(event);
                }}
              />
              {answer[3].answer}
            </div>
            <div className="checkbox">
              <input type="checkbox"
                value={answer[4].score}
                checked={isCheckedE}
                disabled={
                  (
                    isCheckedA === true ||
                    isCheckedB === true ||
                    isCheckedC === true ||
                    isCheckedD === true ||
                    isCheckedF === true ||
                    isCheckedG === true
                  ) ? true : false
                }
                onChange={(event) => {
                  setIsCheckedE(!isCheckedE);
                  handleChange(event);
                }}
              />
              {answer[4].answer}
            </div>
            <div className="checkbox">
              <input type="checkbox"
                value={answer[5].score}
                disabled={
                  (
                    isCheckedA === true ||
                    isCheckedB === true ||
                    isCheckedC === true ||
                    isCheckedD === true ||
                    isCheckedE === true ||
                    isCheckedG === true
                  ) ? true : false
                }
                checked={isCheckedF}
                onChange={(event) => {
                  setIsCheckedF(!isCheckedF);
                  handleChange(event);
                }}
              />
              {answer[5].answer}
            </div>
            </>
        ) : ''
      }
      {
        answer.length === 7 ? (
          <>
            <div className="checkbox">
              <input type="checkbox"
                value={answer[3].score}
                checked={isCheckedD}
                disabled={
                  (
                    isCheckedA === true ||
                    isCheckedB === true ||
                    isCheckedC === true ||
                    isCheckedE === true ||
                    isCheckedF === true ||
                    isCheckedG === true
                  ) ? true : false
                }
                onChange={(event) => {
                  setIsCheckedD(!isCheckedD);
                  handleChange(event);
                }}
              />
              {answer[3].answer}
            </div>
            <div className="checkbox">
              <input type="checkbox"
                value={answer[4].score}
                checked={isCheckedE}
                disabled={
                  (
                    isCheckedA === true ||
                    isCheckedB === true ||
                    isCheckedC === true ||
                    isCheckedD === true ||
                    isCheckedF === true ||
                    isCheckedG === true
                  ) ? true : false
                }
                onChange={(event) => {
                  setIsCheckedE(!isCheckedE);
                  handleChange(event);
                }}
              />
              {answer[4].answer}
            </div>
            <div className="checkbox">
              <input type="checkbox"
                value={answer[5].score}
                disabled={
                  (
                    isCheckedA === true ||
                    isCheckedB === true ||
                    isCheckedC === true ||
                    isCheckedD === true ||
                    isCheckedE === true ||
                    isCheckedG === true
                  ) ? true : false
                }
                checked={isCheckedF}
                onChange={(event) => {
                  setIsCheckedF(!isCheckedF);
                  handleChange(event);
                }}
              />
              {answer[5].answer}
            </div>
            <div className="checkbox">
              <input type="checkbox"
                value={answer[6].score}
                checked={isCheckedG}
                disabled={
                  (
                    isCheckedA === true ||
                    isCheckedB === true ||
                    isCheckedC === true ||
                    isCheckedD === true ||
                    isCheckedE === true ||
                    isCheckedF === true
                  ) ? true : false
                }
                onChange={(event) => {
                  setIsCheckedG(!isCheckedG);
                  handleChange(event);
                }}
              />
              {answer[6].answer}
            </div>
          </>
        ) : ''
      }
    </div>
  )
}

export default QuizzAnswer;