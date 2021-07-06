import React, {useState, useEffect} from 'react';
import { SET_ACTIVE_BOOK } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import './ActiveBook.scss';

function ActiveBook() {
    const [book, setBook] = useState({});
    const [blur, setBlur] = useState(true);
	const [state, dispatch] = useStoreContext();
    const isFirefox = typeof InstallTrigger !== 'undefined';

    useEffect(() => {
        if(state.activeBook){
            setBook(state.activeBook);
            setBlur(isFirefox);
        }
    }, [isFirefox, state.activeBook]);
    
    const clearActiveBook = () => {
        dispatch({
			type: SET_ACTIVE_BOOK,
			activeBook: {}
		});
    }

    return(
        <div>{book.title ? (
            <div className={"blurred-backdrop colored-" + book.color }>
                <div className="active-book-control-area">
                    <button className="close-active-action" onClick={() => clearActiveBook()}><i class="bi bi-x"></i></button>
                </div>
                <div className="active-book-header">
                {book.imageLinks ? (
                    <img className="active-book-thumbnail" alt={book.title + " Cover Art"} src={book.imageLinks.thumbnail}></img>
                ) : (
                    <span></span>
                )}
                    <div>
                    <h1 className="active-book-title">{book.title}</h1>
                    <p className="">{book.publishedDate ? (<span>{book.publishedDate}</span>) : (<span></span>)}</p>
                    {book.authors ? (
                        <p>
                        {book.authors.map((author,index) => {
                            if(index < book.authors.length && book.authors.length > 1){
                                author = author + ' '
                            }
                            return(
                                <span className="active-book-author" key={index}>{author} </span>
                            )
                        })}
                        </p>
                    ) : (
                        <span></span>
                    )}
                    </div>
                </div>
                <div>
                    {book.description ? (
                        <article className="active-book-description">{book.description}</article>
                    ) : (
                        <span className="active-book-description">This title has no provided description.</span>
                    )}
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