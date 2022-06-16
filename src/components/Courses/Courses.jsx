import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthors, getCourses } from '../../store/selectors';
import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';
import { getAllCourses } from '../../store/courses/thunk';
import { getAllAuthors } from '../../store/authors/thunk';

import './Courses.css';

export const Courses = () => {
	const dispatch = useDispatch();
	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);
	const userRole = localStorage.getItem('role');
	const [searchResults, setSearchResults] = useState(courses);

	useEffect(() => {
		dispatch(getAllCourses());
		dispatch(getAllAuthors());
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
					<Link
						to='add'
						className={userRole !== 'admin' ? 'link_disabled' : null}
					>
						<Button text={buttonText} disabled={userRole !== 'admin'} />
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
