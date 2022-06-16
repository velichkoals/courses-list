import React from 'react';
import { Header } from '../Header/Header';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthors, getCourses } from '../../store/selectors';
import { IconContext } from 'react-icons';
import { IoIosArrowBack } from 'react-icons/io';
import { minToHours } from '../../heplers/minToHours';
import { convertDate } from '../../heplers/convertDate';
import { getCourseAuthors } from '../../heplers/getCourseAuthors';

import './CourseInfo.css';

export const CourseInfo = () => {
	const params = useParams();
	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);
	const courseId = params.courseId;
	const course = courses.filter((elem) => elem.id === courseId);

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
				<div className='info__title'>{course[0].title}</div>
				<div className='info-section__wrapper'>
					<div className='info__description'>{course[0].description}</div>
					<div className='info__details'>
						<div className='info__details__item'>
							{' '}
							<span className='info__details__title'>ID:</span>
							{course[0].id}
						</div>
						<div className='info__details__item'>
							{' '}
							<span className='info__details__title'>Duration:</span>
							{minToHours(course[0].duration)}
						</div>
						<div className='info__details__item'>
							<span className='info__details__title'>Created:</span>
							{convertDate(course[0].creationDate)}
						</div>
						<div className='info__details__item'>
							<span className='info__details__title'>Authors:</span>{' '}
							<div>{getCourseAuthors(course[0].authors, authors)}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
