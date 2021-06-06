import {
  getInitialData,
  saveQuestionApi,
  saveQuestionAnswerApi,
} from "../model";
import {
  setUsersAction,
  saveUserAnswer,
  saveUserQuestion,
} from "./users-actions";
import {
  setQuestionsAction,
  saveQuestionAction,
  saveQuestionAnswer,
} from "./questions-actions";

export function initializeAppAction() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(setUsersAction(users));
      dispatch(setQuestionsAction(questions));
    });
  };
}

export function saveQuestionActionCreator(author, optionOneText, optionTwoText) {
  const question = {
    author: author,
    optionOneText: optionOneText,
    optionTwoText: optionTwoText,
  };
  return (dispatch) => {
    return saveQuestionApi(question).then((q) => {
      dispatch(saveQuestionAction(q));
      dispatch(saveUserQuestion(q.author, q.id));
    });
  };
}

export function answerActionCreator(currentUser, qID, answer) {
  return (dispatch) => {
    dispatch(saveQuestionAnswer(currentUser, qID, answer));
    dispatch(saveUserAnswer(currentUser, qID, answer));
    return saveQuestionAnswerApi({
      currentUser: currentUser,
      qid: qID,
      answer: answer,
    });
  };
}
