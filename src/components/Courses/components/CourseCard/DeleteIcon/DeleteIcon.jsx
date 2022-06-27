import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IconContext } from 'react-icons';

export const DeleteIcon = () => {
	return (
		<IconContext.Provider value='react-delete-icon'>
			<RiDeleteBin6Line />
		</IconContext.Provider>
	);
};
