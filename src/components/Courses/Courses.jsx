import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCourseAction } from '../../store/courses/actionCreators';
import { useNavigate } from 'react-router-dom';
import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Button } from '../../common/Button/Button';
import { CreateCourse } from '../CreateCourse/CreateCourse';

import './Courses.css';

export const Courses = ({ add, searchResults, setSearchResults }) => {
	const navigate = useNavigate();
	const [addCourse, setAddCourse] = useState(false);

	const dispatch = useDispatch();
	const courses = useSelector((state) => state.courses.courses);

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			navigate('/login');
		}
	});

	useEffect(() => {
		setSearchResults([...courses]);
	}, [courses]);

	useEffect(() => {
		if (add === false) {
			setAddCourse(false);
		}
	}, [add]);

	const handleClick = () => {
		navigate('add');
		setAddCourse(true);
	};

	const handleSearch = (searchQuery) => {
		let res = [];
		courses.map((elem) => {
			if (
				elem.title.toUpperCase().includes(searchQuery.toUpperCase()) ||
				searchQuery.toUpperCase() === elem.id.toUpperCase()
			) {
				res.push(elem);
			}
			return courses;
		});
		setSearchResults(res);
	};

	const handleClear = () => {
		setSearchResults([...courses]);
	};

	const addNewCourse = (info) => {
		dispatch(addCourseAction(info));
		setAddCourse(false);
	};

	const buttonText = 'Add new course';
	return (
		<div className='courses'>
			{addCourse ? (
				<div className='courses-add'>
					<CreateCourse addNewCourse={addNewCourse} />
				</div>
			) : (
				<div>
					<div className='courses-section'>
						<SearchBar handleSearch={handleSearch} handleClear={handleClear} />
						<Button onClick={handleClick} text={buttonText} />
					</div>
					<div className='courses-list'>
						{searchResults.map((elem, index) => {
							return <CourseCard info={elem} key={index} id={index + 1} />;
						})}
					</div>
				</div>
			)}
		</div>
	);
};
