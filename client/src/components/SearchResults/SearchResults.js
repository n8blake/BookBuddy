import React, {useEffect} from 'react';
import { SET_VIEW_MODE, UPDATE_BOOKS, UPDATE_SEARCH_RESULTS, LOADING } from '../../utils/actions';
import API from '../../utils/API';
import { useStoreContext } from '../../utils/GlobalState';
import './SearchResults.scss';

function SearchResults(){
	const [state, dispatch] = useStoreContext();
	const getData = () => {
		dispatch({type: LOADING});
		// use API here
	}

	useEffect(() => {
		//getData();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	return(
		<div>
			{state.searchResults}
		</div>
	);
}

export default SearchResults;
