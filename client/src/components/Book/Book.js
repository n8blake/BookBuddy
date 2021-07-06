import React from 'react';
import './Book.scss';
import './book-colors.scss';

function Book(props) {

    return (
        <div key={props.index} onClick={() => props.action(props.book)} className={'book book-' + props.book.color} data-item-id={props.id}>
            
            <div className="book-spine-content-container">
            <div className="book-favorite-indicator-container">
                {props.book.isFavorite ? (<i class="bi bi-bookmark-heart-fill"></i>) :
                (
                    <span></span>
                )}
            </div>
            <div className="book-title-container">
                <div className="book-title">
                     {props.book.title}
                </div>
            </div>
            {props.book.title.length < 20 ? (
                <div className="variable-width-spacer-s"></div>
            ) : (
                props.book.title.length < 40 ? (
                    <div className="variable-width-spacer-m"></div>
                ) : (
                    <div className="variable-width-spacer-l"></div>
                )   
            )}
            
            <div className="book-author">
                <hr></hr>
                {
                    props.book.authors ? (
                        props.book.authors.map((author, index) => {
                            return (
                            <div key={index}>
                                <small>{author}</small>
                            </div>
                            )
                        })
                    ) : (
                        <small>unknown</small>
                    )
                }
                
            </div>
            </div>
        </div>
    )

}

export default Book;