import React, {useState, useEffect} from 'react';
import { UPDATE_BOOKS, UPDATE_SEARCH_RESULTS, LOADING } from '../../utils/actions';
import API from '../../utils/API';
import { useStoreContext } from '../../utils/GlobalState';
import './SearchResults.scss';
import FastAverageColor from 'fast-average-color';
import Shelf from '../Shelf/Shelf';

function SearchResults(){
	const fac = new FastAverageColor();
	const [state, dispatch] = useStoreContext();
	const [shelves, setShelves] = useState();
	
	const sortBooks = (books) => {
		const shelves = [];
		// the incoming books into groups of 5
		// put them on a shelf
		const numShelves = Math.ceil(books.length / 5);
		let bookIndex = 0;
		for(let shelfIndex = 0; shelfIndex < numShelves; shelfIndex++){
			const shelf = [];
			for(let bookOnShelfIndex = 0; 
				(bookOnShelfIndex < 5 && bookIndex < books.length); 
				bookOnShelfIndex++){
					shelf.push(books[bookIndex]);
					bookIndex++;
					// console.log("getting color");
					// if(books[bookIndex] && books[bookIndex].volumeInfo){
					// 	console.log(books[bookIndex].volumeInfo);
					// 	getBookColor(books[bookIndex].volumeInfo);
					// }
					
			}
			shelves.push(shelf);
		}
		setShelves(shelves);
	}

	const getBookColor = async (book) => {
		if(book && book.imageLinks){
			// Need to figure out Cross origin issue...
			//
			// const img = new Image();
			// img.crossOrigin = 'anonymous';
			// img.src = book.imageLinks.smallThumbnail;
			// fac.getColorAsync(img)
			// 	.then(color => {
			// 		console.log('Color:' );
			// 		console.log(color);
			// 		book.color = color;
			// 	})
			// 	.catch(e => {
			// 		console.log(e);
			// 	});
			return '#4C0F16';
		}
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
									<div key={item.id} className="d-flex justify-content-left">
										{book.imageLinks ? (
											<img alt="" src={book.imageLinks.smallThumbnail} />
										):(
											<div>no image</div>
										)}
										
										<div>{book.title}</div>	
									</div>
								)
							})}
						</Shelf>)
					})}
				</div>
			) : (
				<div>no results</div>
			)}
			
		</div>
	);
}

export default SearchResults;
