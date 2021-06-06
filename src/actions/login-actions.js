export const LOGIN_ACTION = 'LOGIN_ACTION'
export const LOGOUT_ACTION = 'LOGOUT_ACTION'


export function loginAction (id) {
    return {
        type : LOGIN_ACTION,
        id
    }
}

export function logoutAction () {
    return {
        type: LOGOUT_ACTION,
        id: ''
    }
}