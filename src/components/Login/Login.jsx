import React, { useState } from 'react';
import { Button } from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import LoginEmail from './components/LoginEmail/LoginEmail';
import LoginPass from './components/LoginPass/LoginPass';

import './Login.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const loginBtn = 'Login';
	return (
		<form className='login'>
			<div className='login__title'>Login</div>
			<LoginEmail value={email} onChange={(e) => setEmail(e.target.value)} />
			<LoginPass
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button text={loginBtn} />
			<div className='login-link'>
				If you have an account you can{' '}
				<Link to='/registration'>Registration</Link>{' '}
			</div>
		</form>
	);
};

export default Login;
