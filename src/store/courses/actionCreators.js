import { ADD_ALL_COURSES, ADD_COURSE, REMOVE_COURSE } from './actionTypes';

export const addCourseAction = (payload) => ({ type: ADD_COURSE, payload });
export const removeCourseAction = (payload) => ({
	type: REMOVE_COURSE,
	payload,
});
export const addAllCoursesAction = (payload) => ({
	type: ADD_ALL_COURSES,
	payload,
});
