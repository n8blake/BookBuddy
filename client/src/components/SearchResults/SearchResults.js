import React, {useState, useEffect} from 'react';
import { UPDATE_BOOKS, UPDATE_SEARCH_RESULTS, LOADING } from '../../utils/actions';
import API from '../../utils/API';
import { useStoreContext } from '../../utils/GlobalState';
import './SearchResults.scss';
import FastAverageColor from 'fast-average-color';
import Shelf from '../Shelf/Shelf';
import Book from '../Book/Book';

function SearchResults(){
	const fac = new FastAverageColor();
	const [state, dispatch] = useStoreContext();
	const [shelves, setShelves] = useState();
	
	const sortBooks = (books) => {
		const colors = ['red', 'orange', 'yellow', 'cyan', 'green', 'blue', 'purple', 'brown'];
		const shelves = [];
		// the incoming books into groups of 5
		// put them on a shelf
		const numShelves = Math.ceil(books.length / 5);
		let bookIndex = 0;
		for(let shelfIndex = 0; shelfIndex < numShelves; shelfIndex++){
			const shelf = [];
			for(let bookOnShelfIndex = 0; 
				(bookOnShelfIndex < 10 && bookIndex < books.length); 
				bookOnShelfIndex++){
					shelf.push(books[bookIndex]);
					if(books[bookIndex].volumeInfo){
						const colorIndex = Math.floor(Math.random() * colors.length);
						books[bookIndex].volumeInfo.color = colors[colorIndex];
					}
					bookIndex++;
			}
			shelves.push(shelf);
		}
		setShelves(shelves);
	}

	useEffect(() => {
		if(state.searchResults){
			if(state.searchResults.items){
				sortBooks(state.searchResults.items)
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[state.searchResults]);

	return(
		<div className="container" id="search-results-container">
			
			{ shelves ? (
				<div>
					{shelves.map(shelf => {
						return (
						<Shelf key={shelves.indexOf(shelf)}>
							{shelf.map(item => {
								const book = item.volumeInfo;
								return (
									<Book book={book} ></Book>
								)
							})}
						</Shelf>
						)
					})
					}
				</div>
			) : (
				<div>no results</div>
			)}
			
		</div>
	);
}

export default SearchResults;
