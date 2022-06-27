import { authorsReducer, defaultState } from '../authors/reducer';
import { GET_ALL_AUTHORS, CREATE_AUTHOR } from '../authors/actionTypes';
import { mockedState } from '../../mockedData';

describe('authors reducer', () => {
	it('should return the initial state', () => {
		expect(authorsReducer(undefined, {})).toEqual(defaultState);
	});
	it('should handle GET_ALL_AUTHORS', () => {
		expect(
			authorsReducer(undefined, {
				type: GET_ALL_AUTHORS,
				payload: mockedState.authors,
			})
		).toEqual(mockedState.authors);
	});
	it('should handle CREATE_AUTHOR', () => {
		expect(
			authorsReducer(undefined, {
				type: CREATE_AUTHOR,
				payload: mockedState.authors[0],
			})
		).toEqual([...defaultState, mockedState.authors[0]]);
	});
});
