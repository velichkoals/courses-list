import axios from 'axios';
import { getConfig, URL } from '../services';
import {
	getUserAction,
	loginUserAction,
	logoutUserAction,
} from './actionCreators';

export const loginUser = (userInfo) => {
	return async (dispatch) => {
		return await axios
			.post(`${URL}/login`, userInfo, getConfig())
			.then((response) => {
				let userRole;
				if (
					userInfo.email.trim() === 'admin@email.com' &&
					userInfo.password.trim() === 'admin123'
				) {
					userRole = 'admin';
				} else {
					userRole = 'user';
				}
				const user = {
					name: response.data.user.name,
					token: response.data.result,
					email: response.data.user.email,
					role: userRole,
				};
				dispatch(loginUserAction(user));
				localStorage.setItem('token', response.data.result);
				localStorage.setItem('role', userRole);
			})
			.catch((response) => console.log(response));
	};
};

export const getUserInfo = () => {
	return (dispatch) => {
		return axios
			.get(`${URL}/users/me`, getConfig())
			.then((response) => dispatch(getUserAction(response.data.result)))
			.catch((response) => response.data.result);
	};
};

export const deleteUser = () => {
	return (dispatch) => {
		return axios
			.delete(`${URL}/logout`, getConfig())
			.then((response) => dispatch(logoutUserAction(response.data)))
			.catch((response) => response);
	};
};
