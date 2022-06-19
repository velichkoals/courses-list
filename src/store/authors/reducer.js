import { CREATE_AUTHOR } from './actionTypes';

const defaultState = [];

export const authorsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CREATE_AUTHOR:
			return [...state, action.payload];

		default:
			return state;
	}
};
