import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

export const loginUser = (payload) => ({ type: LOGIN_USER, payload });
export const logoutUser = (payload) => ({ type: LOGOUT_USER, payload });
