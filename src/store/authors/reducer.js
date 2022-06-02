const defaultState = {
	authors: [],
};

export const authorsReducer = (state = defaultState, action) => {
	switch (action.type) {
		// case 'ADD_AUTHOR':
		// 	return { ...state, authors: state.authors + action.payload };
		// мб с массивом по другому

		default:
			return state;
	}
};
