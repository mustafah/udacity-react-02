export const SET_USERS_ACTION = 'SET_USERS_ACTION'
export const CREATE_QUESTION = 'CREATE_QUESTION'
export const ANSWER_ACTION = 'ANSWER_ACTION'


export function setUsersAction(users) {
    return {
        type: SET_USERS_ACTION,
        users,
    }
}

export function saveUserQuestion (user, qid) {
    return {
      type: CREATE_QUESTION,
      user,
      qid,
    }
  }

  export function saveUserAnswer (user, qid, answer) {
    return {
      type: ANSWER_ACTION,
      user,
      qid,
      answer
    }
  }