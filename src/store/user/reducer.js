import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

const defaultState = {
	user: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
	},
};

export const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return {
				...state,
				user: {
					isAuth: true,
					name: action.payload.name,
					token: action.payload.token,
					email: action.payload.email,
				},
			};

		case LOGOUT_USER:
			return {
				...state,
				user: {
					isAuth: false,
					name: action.payload.name,
					token: action.payload.token,
					email: action.payload.email,
				},
			};

		default:
			return state;
	}
};