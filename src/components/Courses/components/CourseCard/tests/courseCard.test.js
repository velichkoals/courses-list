import { mockedStore } from '../../../../../mockedData';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Courses } from '../../../Courses';

describe('courseCard tests', () => {
	test('renders courseCard', () => {
		render(
			<BrowserRouter>
				<Provider store={mockedStore}>
					<Courses />
				</Provider>
			</BrowserRouter>
		);
		const showBtn = screen.getByTestId('show-course');
		const courseCard = screen.getByTestId('courseCard');
		const cardTitle = screen.getByTestId('card-title');
		const cardDescription = screen.getByTestId('card-description');
		const cardDuration = screen.getByTestId('card-duration');
		const cardAuthors = screen.getByTestId('card-authors');
		const cardCreationDate = screen.getByTestId('card-creationDate');
		const courseCardInfo = screen.queryByTestId('course-info');

		expect(showBtn).toBeInTheDocument();
		expect(courseCard).toBeInTheDocument();
		expect(cardTitle).toBeInTheDocument();
		expect(cardDescription).toBeInTheDocument();
		expect(cardDuration).toBeInTheDocument();
		expect(typeof cardDuration.textContent).toBe('string');
		expect(cardAuthors).toBeInTheDocument();
		expect(cardCreationDate).toBeInTheDocument();
		expect(cardCreationDate.textContent).toMatch(/Created:16.06.2022/i);
		expect(courseCardInfo).toBeNull();
	});
});
