import { ADD_COURSE, REMOVE_COURSE } from './actionTypes';

const defaultState = {
	courses: [],
};

// - - - For Task 4 - - -

// async function getCourses() {
// 	const coursesList = await fetchData('GET', '/courses/all');
//
// 	if (coursesList.successful) {
// 		coursesList.result.map((course) => {
// 				defaultState.courses.push(course);
// 			return coursesList;
// 		});
// 	}
// }
// getCourses().then();

export const coursesReducer = (state = defaultState, action) => {
	switch (action.type) {
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
