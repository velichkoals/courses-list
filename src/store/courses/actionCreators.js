import { ADD_COURSE, REMOVE_COURSE } from './actionTypes';

export const addCourseAction = (payload) => ({ type: ADD_COURSE, payload });
export const removeCourseAction = (payload) => ({
	type: REMOVE_COURSE,
	payload,
});
