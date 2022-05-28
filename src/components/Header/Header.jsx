import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import './Header.css';

export const Header = () => {
	const navigate = useNavigate();

	const logoutUser = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('username');
		navigate('/login');
	};

	const buttonText = 'Logout';
	return (
		<div className='header'>
			<div className='header-item'>
				<Link to='/courses'>
					<Logo />
				</Link>
			</div>
			<div className='header-item'>
				<div className='header-userName'>
					{localStorage.getItem('username')}
				</div>
				<Button text={buttonText} onClick={logoutUser} />
			</div>
		</div>
	);
};
