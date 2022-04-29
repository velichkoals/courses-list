import React, { useState } from 'react';
import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';

import './Searchbar.css';

export const SearchBar = (props) => {
	const { handleSearch, handleClear } = props;
	const [searchValue, setSearchValue] = useState('');

	const handleChange = (e) => {
		setSearchValue(e.target.value);
		if (e.target.value === '') {
			handleClear();
		}
	};

	const handleClick = () => {
		handleSearch(searchValue);
	};

	const buttonText = 'Search';
	return (
		<div className='searchBar'>
			<Input
				value={searchValue}
				onChange={handleChange}
				placeholder='Enter course name'
			/>
			<div className='searchbar__btn'>
				<Button onClick={handleClick} text={buttonText} />
			</div>
		</div>
	);
};
