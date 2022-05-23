import React from 'react';
import { Button } from '../../../../common/Button/Button';

export const AuthorsList = (props) => {
	const { authors, addAuthor, newAuthors, removeAuthor } = props;
	const deleteAuthor = 'Delete author';
	return (
		<div className='create__column'>
			<div className='create__item create__item-authors'>
				<div className='item__title'>Authors</div>
				<div className='authors-list'>
					{authors.map((elem, index) => (
						<div key={index} className='authors-list__item'>
							<div className='authors-list__name'>{elem.name}</div>
							<Button
								onClick={() => addAuthor(elem)}
								type='button'
								text='Add author'
							/>
						</div>
					))}
				</div>
				<div className='create__item'>
					<div className='item__title'>Course authors</div>
					{newAuthors.length === 0 ? (
						<div>Authors list is empty</div>
					) : (
						newAuthors.map((elem, index) => (
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
