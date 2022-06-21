import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/user/actionCreators';
import { getAuthors, getCourses } from '../../store/selectors';
import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';

import './Courses.css';
import { getAllAuthors, getAllCourses } from '../../store/services';
import { addAllCoursesAction } from '../../store/courses/actionCreators';
import { addAllAuthors } from '../../store/authors/actionCreators';

export const Courses = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);
	const [searchResults, setSearchResults] = useState(courses);

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			navigate('/login');
		}

		const userInfo = {
			name: localStorage.getItem('username'),
			email: localStorage.getItem('email'),
			token: localStorage.getItem('token'),
		};
		dispatch(loginUser(userInfo));

		getAllCourses().then((response) => {
			if (response.successful) {
				dispatch(addAllCoursesAction(response.result));
			}
		});
		getAllAuthors().then((response) => {
			if (response.successful) {
				dispatch(addAllAuthors(response.result));
			}
		});
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
