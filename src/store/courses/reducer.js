import { ADD_COURSE, REMOVE_COURSE } from './actionTypes';

const defaultState = [];

export const coursesReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_COURSE:
			return [...state, action.payload];

		case REMOVE_COURSE:
			return [...state.filter((course) => course.id !== action.payload)];

		default:
			return state;
	}
};
