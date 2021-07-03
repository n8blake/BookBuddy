import React, {useState, useEffect} from 'react';
import { UPDATE_BOOKS, UPDATE_SEARCH_RESULTS, LOADING } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';

function ActiveBook() {
    return(
        <div>This is the active book</div>
    )
}

export default ActiveBook;