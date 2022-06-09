import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';

import './Courses.css';

export const Courses = ({ authors, courses, setCourses }) => {
	const [coursesList] = useState(courses);
	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			navigate('/login');
		}
		return () => {
			setCourses(courses);
		};
	}, []);

	const handleSearch = (searchQuery) => {
		const res = courses.filter(
			(course) =>
				course.title.toUpperCase().includes(searchQuery.toUpperCase()) ||
				searchQuery.toUpperCase() === course.id.toUpperCase()
		);
		setCourses([...res]);
	};

	const handleClear = () => {
		setCourses([...coursesList]);
	};

	const buttonText = 'Add new course';
	return (
		<div className='courses'>
			<div>
				<div className='courses-section'>
					<SearchBar handleSearch={handleSearch} handleClear={handleClear} />
					<Link to='add'>
						<Button text={buttonText} />
					</Link>
				</div>
				<div className='courses-list'>
					{courses.map((course) => {
						return (
							<CourseCard
								info={course}
								authors={authors}
								key={course.id}
								id={course.id}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
