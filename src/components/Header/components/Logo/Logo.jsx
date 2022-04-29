import React from 'react';
import { FaReact } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './Logo.css';

export const Logo = () => {
	return (
		<IconContext.Provider value={{ className: 'react-icon' }}>
			<FaReact />
		</IconContext.Provider>
	);
};
