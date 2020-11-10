export interface Answer {
  answer: string,
  score: number
}

export interface ListQuestion {
  question: string,
  answerList: Answer[]
}

export interface Result {
  [key: string]: string
}

export interface DataType {
  listQuestion: ListQuestion[]
  result: Result
}