import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { CreateCoursePage } from './pages/CreateCoursePage/CreateCoursePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import mockedCoursesList from './constants';

import './App.css';

function App() {
	const [courses, setCourses] = useState(mockedCoursesList[1]);
	const [authors, setAuthors] = useState(mockedCoursesList[0]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Registration />} />
				<Route path='*' element={<NotFoundPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Registration />} />
				<Route
					path='/courses'
					element={
						<HomePage
							authors={authors}
							setAuthors={setAuthors}
							courses={courses}
							setCourses={setCourses}
						/>
					}
				/>
				<Route
					path='/courses/add'
					element={
						<CreateCoursePage
							authors={authors}
							setAuthors={setAuthors}
							courses={courses}
							setCourses={setCourses}
						/>
					}
				/>
				<Route
					path='/courses/:courseId'
					element={<CourseInfo courses={courses} authors={authors} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
