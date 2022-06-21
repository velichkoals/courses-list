import { ADD_COURSE, REMOVE_COURSE, ADD_ALL_COURSES } from './actionTypes';

export const addAllCoursesAction = (payload) => ({
	type: ADD_ALL_COURSES,
	payload,
});
export const addCourseAction = (payload) => ({ type: ADD_COURSE, payload });
export const removeCourseAction = (payload) => ({
	type: REMOVE_COURSE,
	payload,
});
