import { SET_QUESTIONS_ACTION, SAVE_QUESTION_ACTION, SAVE_QUESTION_ANSWER_ACTION } from '../actions/questions-actions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case SET_QUESTIONS_ACTION:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION_ACTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case SAVE_QUESTION_ANSWER_ACTION: 
            const votes = state[action.qid][action.answer].votes
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: votes.concat([action.currentUser])
                    }
                }
            }
        default:
            return state
    }
}