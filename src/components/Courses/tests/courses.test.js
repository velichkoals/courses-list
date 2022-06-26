import { mockedState, mockedStore } from '../../../mockedData';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Courses } from '../Courses';

describe('courses tests', () => {
	test('renders courses', () => {
		render(
			<BrowserRouter>
				<Provider store={mockedStore}>
					<Courses />
				</Provider>
			</BrowserRouter>
		);
		const addCourseBtn = screen.getByTestId('add-course-btn');
		const searchBar = screen.getByTestId('searchBar');
		const searchInput = screen.getByPlaceholderText('Enter course name');
		const courseCard = screen.getByTestId('courseCard');

		expect(addCourseBtn).toBeInTheDocument();
		expect(addCourseBtn).toBeDisabled();
		expect(searchBar).toBeInTheDocument();
		expect(searchInput).toBeInTheDocument();
		expect(courseCard).toBeInTheDocument();
		expect(mockedState.courses.length).toBe(1);
		expect((mockedState.courses.length = 0)).toBe(0);
	});
});
