import { LOGIN_USER, LOGOUT_USER, GET_USER } from './actionTypes';

export const loginUserAction = (payload) => ({ type: LOGIN_USER, payload });
export const logoutUserAction = (payload) => ({ type: LOGOUT_USER, payload });
export const getUserAction = (payload) => ({ type: GET_USER, payload });
