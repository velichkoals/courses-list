import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { CreateCoursePage } from './pages/CreateCoursePage/CreateCoursePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Registration />} />
				<Route path='*' element={<NotFoundPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Registration />} />
				<Route path='/courses' element={<HomePage />} />
				<Route path='/courses/add' element={<CreateCoursePage />} />
				<Route path='/courses/:courseId' element={<CourseInfo />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
