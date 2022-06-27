import { LOGIN_USER, LOGOUT_USER, GET_USER } from './actionTypes';

export const defaultState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_USER:
			return {
				...state,
				isAuth: true,
				name: action.payload.name,
				token: localStorage.getItem('token'),
				email: action.payload.email,
				role: action.payload.role,
			};

		case LOGIN_USER:
			return {
				...state,
				isAuth: true,
				name: action.payload.name,
				token: action.payload.token,
				email: action.payload.email,
				role: action.payload.role,
			};

		case LOGOUT_USER:
			return {
				...state,
				isAuth: false,
				name: action.payload,
				token: action.payload,
				email: action.payload,
				role: action.payload,
			};

		default:
			return state;
	}
};
