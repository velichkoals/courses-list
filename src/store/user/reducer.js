const defaultState = {
	user: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
	},
};

export const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		// case 'ADD_AUTHOR':
		// 	return { ...state, authors: state.authors + action.payload };
		// мб с массивом по другому

		default:
			return state;
	}
};
