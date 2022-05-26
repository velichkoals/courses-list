import Registration from './components/Registration/Registration';
import HomePage from './pages/HomePage/HomePage';
import Login from './components/Login/Login';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Registration />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Registration />} />
				<Route path='/courses' element={<HomePage />} />
				<Route path='/courses/add' element={<CreateCourse />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
