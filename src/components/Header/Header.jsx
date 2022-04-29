import React from 'react';
import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import './Header.css';

const Header = () => {
	const buttonText = 'Logout';
	return (
		<div className='header'>
			<div className='header-item'>
				<Logo />
			</div>
			<div className='header-item'>
				<div className='header-userName'>velichkoals</div>
				<Button text={buttonText} />
			</div>
		</div>
	);
};

export default Header;
