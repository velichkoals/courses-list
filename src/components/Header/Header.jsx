import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/selectors';
import { logoutUser } from '../../store/user/actionCreators';
import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import './Header.css';

export const Header = () => {
	const [isDisabled, setIsDisabled] = useState(true);
	const navigate = useNavigate();
	const location = useLocation();
	const user = useSelector(getUser);
	const dispatch = useDispatch();

	useEffect(() => {
		if (location.pathname === '/courses/add') {
			setIsDisabled(false);
		}
	});

	const removeUser = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('username');
		navigate('/login');

		const userInfo = {
			name: '',
			token: '',
			email: '',
		};

		dispatch(logoutUser(userInfo));
	};

	const buttonText = 'Logout';
	return (
		<div className='header'>
			<div className='header-item'>
				<Link to={isDisabled ? '/courses' : '#'}>
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
