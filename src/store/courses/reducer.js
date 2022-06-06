import { ADD_COURSE, REMOVE_COURSE, ADD_ALL_COURSES } from './actionTypes';

const defaultState = {
	courses: [],
};

export const coursesReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_ALL_COURSES:
			return { ...state, courses: [...state.courses, ...action.payload] };
		case ADD_COURSE:
			return { ...state, courses: [...state.courses, action.payload] };

		case REMOVE_COURSE:
			return {
				...state,
				courses: state.courses.filter((course) => course.id !== action.payload),
			};

		default:
			return state;
	}
};
