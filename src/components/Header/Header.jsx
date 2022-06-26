import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/selectors';
import { deleteUser, getUserInfo } from '../../store/user/thunk';
import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import './Header.css';

export const Header = () => {
	const [isDisabled, setIsDisabled] = useState(true);
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();
	const user = useSelector(getUser);

	useEffect(() => {
		if (location.pathname === '/courses/add') {
			setIsDisabled(false);
		}
		dispatch(getUserInfo());
	}, []);

	async function removeUser() {
		navigate('/login');
		dispatch(deleteUser());
		localStorage.removeItem('token');
		localStorage.removeItem('role');
	}

	const buttonText = 'Logout';
	return (
		<div className='header'>
			<div className='header-item'>
				<Link to={isDisabled ? '/courses' : '#'} data-testid='react-icon'>
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
