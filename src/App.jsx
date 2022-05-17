import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage/HomePage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
