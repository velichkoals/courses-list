import { CREATE_AUTHOR } from './actionTypes';

const defaultState = {
	authors: [],
};

export const authorsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CREATE_AUTHOR:
			return { ...state, authors: [...state.authors, action.payload] };

		default:
			return state;
	}
};
