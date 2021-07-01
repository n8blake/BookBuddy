import React, { useEffect, useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import useDebounce from "../../utils/debounceHook";
import { SEARCH, UPDATE_SEARCH_RESULTS } from '../../utils/actions';
import API from "../../utils/API";
import './style.scss';

function SearchControls() {

    const [state, dispatch] = useStoreContext();
    const [search, setSearch] = useState("");

    const debouncedSearchTerm = useDebounce(search, 500);

    const handleInputChange = event => {
        setSearch(event.target.value);
    }

    useEffect(() => {
        // if there is nothing searched...
        if(!search){
            dispatch({
                type: SEARCH,
                searchTerm: ""
            });
            dispatch({
                type: UPDATE_SEARCH_RESULTS,
                searchResults: state.books
            });
            return;
        }

        if(debouncedSearchTerm){
            // set global search term
            dispatch({
                type: SEARCH,
                searchTerm: debouncedSearchTerm
            });
            console.log(`Starting search...`);
            API.search(state.searchTerm)
                .then(results => {
                    console.log("Searched!");
                    console.log(results);
                    dispatch({
                    	type: UPDATE_SEARCH_RESULTS,
                    	searchResults: results.data
                    });
                });

        }
    }, [debouncedSearchTerm, dispatch, search, state.books, state.searchTerm]);

    return (
        <div id="search-controls-container-bg">    
            <div id="search-controls-container-w">
                <div className="search-wrapper">
                    <i className="bi bi-search m-2"></i>
                    <input className="ml-2" type="text" onChange={handleInputChange} />
                </div>
            </div>
        </div>
    );

}

export default SearchControls;