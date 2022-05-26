import React from 'react';
import { useFormContext } from 'react-hook-form';

export const FormInput = (props) => {
	const { register } = useFormContext();
	const { name, options, onChange } = props;

	return (
		<input
			{...props}
			{...register(name, options)}
			onChange={onChange}
			className='input'
		/>
	);
};
