import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/user/actionCreators';
import { getUser } from '../../store/selectors';

import './Header.css';

export const Header = () => {
	const navigate = useNavigate();
	const user = useSelector(getUser);
	const dispatch = useDispatch();

	const removeUser = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('username');
		navigate('/login');

		const userInfo = {
			name: '',
			token: '',
			email: '',
			role: '',
		};

		dispatch(logoutUser(userInfo));
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
				<div className='header-userName'>{user.name}</div>
				<Button text={buttonText} onClick={removeUser} />
			</div>
		</div>
	);
};
