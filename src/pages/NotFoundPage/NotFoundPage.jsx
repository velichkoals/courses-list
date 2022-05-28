import React from 'react';
import { Header } from '../../components/Header/Header';

import './NotFoundPage.css';

export const NotFoundPage = () => {
	return (
		<div>
			<Header />
			<div className='not-found__article'>Sorry, that page doesn't exist</div>
		</div>
	);
};
