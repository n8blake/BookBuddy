import React from 'react';
import './style.scss';
import SearchControls from '../SearchControls/';
import SearchResults from '../SearchResults/SearchResults.js';

class Search extends React.Component {

	state = {};

	render(){
		return(
			<div>
				<SearchControls />
				<SearchResults />
			</div>
		);
	}
}

export default Search;