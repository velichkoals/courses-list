import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

const defaultState = {
	user: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
		role: '',
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
					role: action.payload.role,
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
					role: action.payload.role,
				},
			};

		default:
			return state;
	}
};
