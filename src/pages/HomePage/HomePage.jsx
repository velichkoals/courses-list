import React from 'react';
import { Header } from '../../components/Header/Header';
import { Courses } from '../../components/Courses/Courses';

import './HomePage.css';

export const HomePage = (props) => {
	return (
		<div className='App'>
			<Header />
			<section className='main'>
				<Courses {...props} />
			</section>
		</div>
	);
};
