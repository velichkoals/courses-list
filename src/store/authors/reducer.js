import { CREATE_AUTHOR, GET_ALL_AUTHORS } from './actionTypes';

const defaultState = {
	authors: [],
};

export const authorsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_ALL_AUTHORS:
			return { ...state, authors: [...action.payload] };
		case CREATE_AUTHOR:
			return { ...state, authors: [...state.authors, action.payload] };

		default:
			return state;
	}
};
