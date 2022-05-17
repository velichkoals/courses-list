import React from 'react';
import Header from '../../components/Header/Header';
import { Courses } from '../../components/Courses/Courses';

import './HomePage.css';

const HomePage = () => {
	return (
		<div className='App'>
			<Header />
			<section className='main'>
				<Courses />
			</section>
		</div>
	);
};

export default HomePage;
