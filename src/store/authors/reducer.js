import { CREATE_AUTHOR } from './actionTypes';

const defaultState = {
	authors: [],
};

// - - - For Task 4 - - -

// async function getCourses() {
// 	const authorsList = await fetchData('GET', '/authors/all');
// 	console.log(authorsList);
// 	if (authorsList.successful) {
// 		authorsList.result.map((author) => {
// 			defaultState.authors.push(author);
// 			return authorsList;
// 		});
// 	}
// }
// getCourses().then();

export const authorsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CREATE_AUTHOR:
			return { ...state, authors: [...state.authors, action.payload] };

		default:
			return state;
	}
};
