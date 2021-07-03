import React, {useState, useEffect} from 'react';
import { SET_ACTIVE_BOOK } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import './ActiveBook.scss';

function ActiveBook() {
    const [book, setBook] = useState({});
	const [state, dispatch] = useStoreContext();

    useEffect(() => {
        if(state.activeBook){
            setBook(state.activeBook);
        }
    }, [state.activeBook])
    
    const clearActiveBook = () => {
        dispatch({
			type: SET_ACTIVE_BOOK,
			activeBook: {}
		});
    }

    return(
        <div>{book.title ? (
            <div className="active-book-container">
                <div className="colored-backdrop">
                    {book.title}
                </div>
            </div>
        ) : (
            <span></span>
        )
        }
        </div>
    )
}

export default ActiveBook;