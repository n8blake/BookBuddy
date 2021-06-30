import React, { useEffect, useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import useDebounce from "../../utils/debounceHook";
import { SEARCH, UPDATE_SEARCH_RESULTS } from '../../utils/actions';
import './style.scss';

function SearchControls() {

    const [state, dispatch] = useStoreContext();
    const [search, setSearch] = useState("");

    const debouncedSearchTerm = useDebounce(search, 100);

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
            
            //console.log(searchResults);
            dispatch({
                type: UPDATE_SEARCH_RESULTS,
                searchResults: debouncedSearchTerm
            })

        }
    }, [debouncedSearchTerm, dispatch, search, state.employees, state.searchTerm]);

    return (
        <div className="d-flex jusitify-content-center">    
            <div className="d-flex justify-content-center">
                <div className="search-wrapper">
                    <i className="bi bi-search m-2"></i>
                    <input className="ml-2" type="text" onChange={handleInputChange} />
                </div>
            </div>
        </div>
    );

}

export default SearchControls;