import { LOGIN_ACTION, LOGOUT_ACTION } from '../actions/login-actions'

export default function (state = null, action) {
    switch (action.type) {
        case LOGIN_ACTION :
            return action.id
        case LOGOUT_ACTION :
            return action.id
        default :
            return state
    }
}