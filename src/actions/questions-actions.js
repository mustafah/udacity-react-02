export const SET_QUESTIONS_ACTION = 'SET_QUESTIONS_ACTION'
export const SAVE_QUESTION_ACTION = 'SAVE_QUESTION_ACTION'
export const SAVE_QUESTION_ANSWER_ACTION = 'SAVE_QUESTION_ANSWER_ACTION'

export function setQuestionsAction (questions) {
    return { 
        type: SET_QUESTIONS_ACTION,
        questions
    }
}

export function saveQuestionAction(question) {
    return {
        type: SAVE_QUESTION_ACTION,
        question
    }
}

export function saveQuestionAnswer (currentUser, qid, answer) {
    return {
      type: SAVE_QUESTION_ANSWER_ACTION,
      currentUser,
      qid,
      answer
    }
  }