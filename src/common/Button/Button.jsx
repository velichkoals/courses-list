import React from 'react';

import './Button.css';

export const Button = (props) => {
	const { text } = props;
	return (
		<button {...props} className='button'>
			{text}
		</button>
	);
};
