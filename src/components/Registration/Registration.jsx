import React, { useState } from 'react';
import { Button } from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import RegistrationName from './components/RegistrationName/RegistrationName';
import RegistrationEmail from './components/RegistrationEmail/RegistrationEmail';
import RegistrationPass from './components/RegistrationPass/RegistrationPass';

import './Registration.css';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const registrationBtn = 'Registration';

	return (
		<form className='registration'>
			<div className='registration__title'>Registration</div>
			<RegistrationName
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<RegistrationEmail
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<RegistrationPass
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button text={registrationBtn} />
			<div className='login-link'>
				If you have an account you can <Link to='/login'>Login</Link>{' '}
			</div>
		</form>
	);
};

export default Registration;
