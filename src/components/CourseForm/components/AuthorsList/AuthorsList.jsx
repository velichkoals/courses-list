import React from 'react';
import { Button } from '../../../../common/Button/Button';

export const AuthorsList = ({
	authorsList,
	addAuthor,
	courseAuthors,
	deleteAuthor,
}) => {
	const buttonText = 'Delete author';
	return (
		<div className='create__column'>
			<div className='create__item create__item-authors'>
				<div className='item__title'>Authors</div>
				<div className='authors-list'>
					{authorsList.map((author) => (
						<div key={author.id} className='authors-list__item'>
							<div className='authors-list__name'>{author.name}</div>
							<Button
								onClick={() => addAuthor(author)}
								type='button'
								text='Add author'
							/>
						</div>
					))}
				</div>
				<div className='create__item'>
					<div className='item__title'>Course authors</div>
					{courseAuthors.length === 0 ? (
						<div>Authors list is empty</div>
					) : (
						courseAuthors.map((newAuthor) => (
							<div key={newAuthor.id} className='authors-list__item'>
								<div className='authors-list__name'>{newAuthor.name}</div>
								<Button
									onClick={() => deleteAuthor(newAuthor)}
									type='button'
									text={buttonText}
								/>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
};
