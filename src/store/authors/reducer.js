import { ADD_ALL_AUTHORS, CREATE_AUTHOR } from './actionTypes';

const defaultState = [];

export const authorsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_ALL_AUTHORS:
			return [...action.payload];

		case CREATE_AUTHOR:
			return [...state, action.payload];

		default:
			return state;
	}
};
