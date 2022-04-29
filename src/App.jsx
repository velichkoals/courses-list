import Header from './components/Header/Header';
import { Courses } from './components/Courses/Courses';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<section className='main'>
				<Courses />
			</section>
		</div>
	);
}

export default App;
