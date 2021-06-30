import React, {useEffect} from 'react';
import { UPDATE_BOOKS, UPDATE_SEARCH_RESULTS, LOADING } from '../../utils/actions';
import API from '../../utils/API';
import { useStoreContext } from '../../utils/GlobalState';
import './SearchResults.scss';

function SearchResults(){
	const [state, dispatch] = useStoreContext();
	const getData = () => {
		dispatch({type: LOADING});
		// use API here
		API.search(state.searchTerm)
			.then(results => {
				console.log("Searched!");
				// console.log(results);
				// dispatch({
				// 	type: UPDATE_SEARCH_RESULTS,
				// 	searchResults: results.data.results
				// });
			});
		
	}

	useEffect(() => {
		//getData();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	return(
		<div>
			{ state.searchResults.items ? (
				state.searchResults.items.map(item => {
					const book = item.volumeInfo;
					return (
						<div key={item.id} className="d-flex justify-content-left">
							<img alt="" src={book.imageLinks.smallThumbnail} />
							<div>{book.title}</div>	
						</div>
					)
				})
				//<div>results</div>
			) : (
				<div>no resutls</div>
			)}
		</div>
	);
}

export default SearchResults;
