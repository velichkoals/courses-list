import React from 'react';
import { Button } from '../../../../common/Button/Button';

export const AuthorsList = ({
	addAuthor,
	removeAuthor,
	courseAuthors,
	authorsList,
}) => {
	const deleteAuthor = 'Delete author';
	return (
		<div className='create__column'>
			<div className='create__item create__item-authors'>
				<div className='item__title'>Authors</div>
				<div className='authors-list'>
					{authorsList.length === 0 ? (
						<div>Authors list is empty</div>
					) : (
						authorsList.map((elem, index) => (
							<div key={index} className='authors-list__item'>
								<div className='authors-list__name'>{elem.name}</div>
								<Button
									onClick={() => addAuthor(elem)}
									type='button'
									text='Add author'
								/>
							</div>
						))
					)}
				</div>
				<div className='create__item'>
					<div className='item__title'>Course authors</div>
					{courseAuthors.length === 0 ? (
						<div>Course authors list is empty</div>
					) : (
						courseAuthors.map((elem, index) => (
							<div key={index} className='authors-list__item'>
								<div className='authors-list__name'>{elem.name}</div>
								<Button
									onClick={() => removeAuthor(elem)}
									type='button'
									text={deleteAuthor}
								/>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
};
