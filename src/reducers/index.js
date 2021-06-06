import { combineReducers } from 'redux'
import currentUser from './currentUser-reducer'
import users from './users-reducer'
import questions from './questions-reducer'

export default combineReducers({
    currentUser,
    users,
    questions,
})