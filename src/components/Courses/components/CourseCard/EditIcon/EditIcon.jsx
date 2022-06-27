import React from 'react';
import { MdEdit } from 'react-icons/md';
import { IconContext } from 'react-icons';

export const EditIcon = () => {
	return (
		<IconContext.Provider value='react-delete-icon'>
			<MdEdit />
		</IconContext.Provider>
	);
};
