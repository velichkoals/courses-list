import { CREATE_AUTHOR } from './actionTypes';
import { fetchData } from '../../heplers/fetchData';

const defaultState = [];

export async function getAllAuthors() {
	const authorsList = await fetchData('GET', '/authors/all');
	if (authorsList.successful) {
		authorsList.result.map((author) => {
			defaultState.push(author);
			return authorsList;
		});
	}
	return defaultState;
}
getAllAuthors().then((r) => r);

export const authorsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CREATE_AUTHOR:
			return [...state, action.payload];

		default:
			return state;
	}
};
