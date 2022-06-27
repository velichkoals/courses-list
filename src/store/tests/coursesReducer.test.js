import { coursesReducer, defaultState } from '../courses/reducer';
import {
	ADD_ALL_COURSES,
	ADD_COURSE,
	REMOVE_COURSE,
} from '../courses/actionTypes';
import { mockedState } from '../../mockedData';

describe('courses reducer', () => {
	it('should return the initial state', () => {
		expect(coursesReducer(undefined, {})).toEqual(defaultState);
	});
	it('should handle ADD_ALL_COURSES', () => {
		expect(
			coursesReducer(undefined, {
				type: ADD_ALL_COURSES,
				payload: mockedState.courses,
			})
		).toEqual(mockedState.courses);
	});
	it('should handle ADD_COURSE', () => {
		expect(
			coursesReducer(undefined, {
				type: ADD_COURSE,
				payload: mockedState.courses[0],
			})
		).toEqual([...defaultState, mockedState.courses[0]]);
	});
	it('should handle REMOVE_COURSE', () => {
		expect(
			coursesReducer(undefined, {
				type: REMOVE_COURSE,
				payload: 'a9f4fd38-eff0-4385-be12-1f12781a9d62',
			})
		).toEqual([]);
	});
});
