import { SET_USERS_ACTION, ANSWER_ACTION, CREATE_QUESTION } from '../actions/users-actions'

export default function users(state= {}, action) {
    switch(action.type) {
        case SET_USERS_ACTION :
            return {
                ...state,
                ...action.users
            }
        case ANSWER_ACTION :
            return {
              ...state,
              [action.user] : {
                ...state[action.user],
                answers : {
                  ...state[action.user].answers,
                  [action.qid] : action.answer
                }
              }
            }
        case CREATE_QUESTION :
            return {
              ...state,
              [action.user] : {
                ...state[action.user],
                questions: [...state[action.user].questions, action.qid]
              }
            }
        default :
            return state
    }
}