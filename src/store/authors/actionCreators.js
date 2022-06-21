import { ADD_ALL_AUTHORS, CREATE_AUTHOR } from './actionTypes';

export const addAllAuthors = (payload) => ({
	type: ADD_ALL_AUTHORS,
	payload,
});

export const createAuthorAction = (payload) => ({
	type: CREATE_AUTHOR,
	payload,
});
