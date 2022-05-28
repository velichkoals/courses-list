import React from 'react';
import { Header } from '../Header/Header';
import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { IconContext } from 'react-icons';

import './CourseInfo.css';

export const CourseInfo = () => {
	const location = useLocation();

	const authors = location.state.authorsList;
	const title = location.state.info.title;
	const id = location.state.info.id;
	const description = location.state.info.description;
	const duration = `${location.state.duration} hours`;
	const date = location.state.correctDate;

	return (
		<div className='course-info'>
			<Header />
			<div className='info-wrapper'>
				<Link to='/courses' className='courses-link'>
					<IconContext.Provider value={{ className: 'arrow-back' }}>
						<IoIosArrowBack />
					</IconContext.Provider>
					Back to courses
				</Link>
				<div className='info__title'>{title}</div>
				<div className='info-section__wrapper'>
					<div className='info__description'>{description}</div>
					<div className='info__details'>
						<div className='info__details__item'>
							{' '}
							<span className='info__details__title'>ID:</span>
							{id}
						</div>
						<div className='info__details__item'>
							{' '}
							<span className='info__details__title'>Duration:</span>
							{duration}
						</div>
						<div className='info__details__item'>
							<span className='info__details__title'>Created:</span>
							{date}
						</div>
						<div className='info__details__item'>
							<span className='info__details__title'>Authors:</span>{' '}
							<div>{authors}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
