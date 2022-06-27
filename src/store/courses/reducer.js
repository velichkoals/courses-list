import { ADD_COURSE, REMOVE_COURSE, ADD_ALL_COURSES } from './actionTypes';

export const defaultState = [];

export const coursesReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_ALL_COURSES:
			return [...action.payload];

		case ADD_COURSE:
			return [...state, action.payload];

		case REMOVE_COURSE:
			return [...state.filter((course) => course.id !== action.payload)];

		default:
			return state;
	}
};
