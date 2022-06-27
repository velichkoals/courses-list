import React, { useState } from 'react';
import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';

import './Searchbar.css';

export const SearchBar = ({ handleSearch, handleClear }) => {
	const [searchValue, setSearchValue] = useState('');

	const handleChange = (e) => {
		setSearchValue(e.target.value);
		if (e.target.value === '') {
			handleClear();
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		handleSearch(searchValue);
	};

	const buttonText = 'Search';
	return (
		<form onSubmit={onSubmit} className='searchBar' data-testid='searchBar'>
			<Input
				value={searchValue}
				onChange={handleChange}
				placeholder='Enter course name'
			/>
			<div className='searchbar__btn'>
				<Button type='submit' text={buttonText} data-testid='search-btn' />
			</div>
		</form>
	);
};
