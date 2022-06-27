import { CREATE_AUTHOR, GET_ALL_AUTHORS } from './actionTypes';

export const defaultState = [];

export const authorsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_ALL_AUTHORS:
			return [...action.payload];

		case CREATE_AUTHOR:
			return [...state, action.payload];

		default:
			return state;
	}
};
