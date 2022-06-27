import { screen, render } from '@testing-library/react';
import { Header } from '../Header';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mockedStore } from '../../../mockedData';

test('renders header', () => {
	render(
		<BrowserRouter>
			<Provider store={mockedStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);
	const userNameElement = screen.getByText(/test name/i);
	const btn = screen.getByRole('button');
	const icon = screen.getByTestId('react-icon');

	expect(userNameElement).toBeInTheDocument();
	expect(btn).toBeInTheDocument();
	expect(icon).toBeInTheDocument();
});
