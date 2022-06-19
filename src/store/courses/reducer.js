import { ADD_COURSE, REMOVE_COURSE } from './actionTypes';
import { fetchData } from '../../heplers/fetchData';

const defaultState = [];

export async function getAllCourses() {
	const coursesList = await fetchData('GET', '/courses/all');
	if (coursesList.successful) {
		coursesList.result.map((course) => {
			defaultState.push(course);
			return coursesList;
		});
	}
	return defaultState;
}
getAllCourses().then((r) => r);

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
