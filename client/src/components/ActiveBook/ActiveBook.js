import React, {useState, useEffect} from 'react';
import { SET_ACTIVE_BOOK } from '../../utils/actions';
import API from '../../utils/API';
import { useStoreContext } from '../../utils/GlobalState';
import './ActiveBook.scss';

function ActiveBook() {
    const [book, setBook] = useState({});
    //const [blur, setBlur] = useState(true);
	const [state, dispatch] = useStoreContext();
    //const isFirefox = typeof InstallTrigger !== 'undefined';

    useEffect(() => {
        if(state.activeBook){
            setBook(state.activeBook);
            //setBlur(isFirefox);
        }
    }, [state.activeBook]);
    
    const clearActiveBook = () => {
        dispatch({
			type: SET_ACTIVE_BOOK,
			activeBook: {}
		});
    }

    const isFavorite = (id) => {
        let isFavorite = false;
        if(state.books){
            state.books.forEach(book => {
                if(book.googleBooksId){
                    if(book.googleBooksId === id) isFavorite = true;
                } 
            })
        }
        return isFavorite;
    }

    // A book looks like...
    // title: { type: String, required: true },
    // description: { type: String, required: true },
    // link: { type: String, required: true },
    // image: { type: String, required: true },
    // authors: { type: Array }

    const setFavorite = () => {
        console.log(state.activeBook);
        const book = {};
        book.title = state.activeBook.title;
        book.description = state.activeBook.description;
        book.googleBooksId = state.activeBook.id;
        book.link = state.activeBook.infoLink;
        book.image = state.activeBook.imageLinks.thumbnail;
        book.authors = state.activeBook.authors;
        API.postFavorite(book).then(response => {
            console.log(response);
        });
    }

    const removeFavorite = () => {

    }

    return(
        <div>{book.title ? (
            <div className={"blurred-backdrop colored-" + book.color }>
                <div className="active-book-control-area">
                    {isFavorite(book.googleBooksId) || isFavorite(book.id) ? (
                        <button className="unmark-favorite-action" onClick={() => {}}><i className="bi bi-bookmark-heart-fill"></i></button>
                    ) : (
                        <button className="mark-favorite-action" onClick={() => setFavorite()}><i className="bi bi-bookmark-plus"></i></button>
                    )}
                    <button className="close-active-action" onClick={() => clearActiveBook()}><i className="bi bi-x"></i></button>
                </div>
                <div className="active-book-header">
                    {book.image ? (
                        <img className="active-book-thumbnail" alt={book.title + " Cover Art"} src={book.image}></img>
                    ) : (
                        <span></span>
                    )}
                    {book.imageLinks ? (
                        <img className="active-book-thumbnail" alt={book.title + " Cover Art"} src={book.imageLinks.thumbnail}></img>
                    ) : (
                        <span></span>
                    )}
                    <div>
                    <h1 className="active-book-title">{book.title} </h1>
                    <p className="active-book-date">SourceID: {book.id} - {isFavorite(book.id)}</p>
                    <p className="active-book-date">GoogleBooksId: {book.googleBooksId}</p>
                    <p className="active-book-date">{book.publishedDate ? (<span>{book.publishedDate}</span>) : (<span></span>)}</p>
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