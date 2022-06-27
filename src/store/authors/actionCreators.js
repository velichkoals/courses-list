import { CREATE_AUTHOR, GET_ALL_AUTHORS } from './actionTypes';

export const createAuthorAction = (payload) => ({
	type: CREATE_AUTHOR,
	payload,
});
export const getAllAuthorsAction = (payload) => ({
	type: GET_ALL_AUTHORS,
	payload,
});
