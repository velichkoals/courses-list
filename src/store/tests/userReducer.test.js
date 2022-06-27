import { userReducer, defaultState } from '../user/reducer';
import { LOGIN_USER, LOGOUT_USER, GET_USER } from '../user/actionTypes';
import { mockedState } from '../../mockedData';

describe('user reducer', () => {
	it('should return the initial state', () => {
		expect(userReducer(undefined, {})).toEqual(defaultState);
	});
	it('should handle GET_USER', () => {
		expect(
			userReducer(undefined, {
				type: GET_USER,
				payload: mockedState.user,
			})
		).toEqual(mockedState.user);
	});
	it('should handle LOGIN_USER', () => {
		expect(
			userReducer(undefined, {
				type: LOGIN_USER,
				payload: mockedState.user,
			})
		).toEqual(mockedState.user);
	});
	it('should handle LOGOUT_USER', () => {
		expect(
			userReducer(undefined, {
				type: LOGOUT_USER,
				payload: '',
			})
		).toEqual({
			isAuth: false,
			name: '',
			email: '',
			role: '',
			token: '',
		});
	});
});
