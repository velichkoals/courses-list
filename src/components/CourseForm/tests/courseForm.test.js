import { mockedStore } from '../../../mockedData';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CourseForm } from '../CourseForm';

test('renders courseForm', () => {
	render(
		<BrowserRouter>
			<Provider store={mockedStore}>
				<CourseForm />
			</Provider>
		</BrowserRouter>
	);
	const createCourseBtn = screen.getByTestId('create-course-btn');
	const createAuthorBtn = screen.getByTestId('create-author-btn');
	const titleInput = screen.getByPlaceholderText('Enter title');
	const descriptionInput = screen.getByPlaceholderText('Enter description');
	const authorInput = screen.getByPlaceholderText('Enter author name');
	const durationInput = screen.getByTestId('duration-input');
	const author = screen.getByTestId('author');

	expect(createCourseBtn).toBeInTheDocument();
	expect(createAuthorBtn).toBeInTheDocument();
	expect(titleInput).toBeInTheDocument();
	expect(descriptionInput).toBeInTheDocument();
	expect(authorInput).toBeInTheDocument();
	expect(durationInput).toBeInTheDocument();
	expect(author).toBeInTheDocument();
});
