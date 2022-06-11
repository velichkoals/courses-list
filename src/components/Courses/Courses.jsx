import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthors, getCourses } from '../../store/selectors';
import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';

import './Courses.css';

export const Courses = () => {
	const navigate = useNavigate();
	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);
	const [searchResults, setSearchResults] = useState(courses);

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			navigate('/login');
		}
	}, []);

	useEffect(() => {
		setSearchResults([...courses]);
	}, [courses]);

	const handleSearch = (searchQuery) => {
		const res = courses.filter(
			(course) =>
				course.title.toUpperCase().includes(searchQuery.toUpperCase()) ||
				searchQuery.toUpperCase() === course.id.toUpperCase()
		);
		setSearchResults([...res]);
	};

	const handleClear = () => {
		setSearchResults([...courses]);
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
					{searchResults.map((course) => {
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
