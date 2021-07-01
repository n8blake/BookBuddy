import React, {useState, useEffect} from 'react';
import './Book.scss';
import './book-colors.scss';

function Book(props) {

    const [color, setColor] = useState('blue');

	const getBookColor = () => {
		//if(props.img){
			// Need to figure out Cross origin issue...
			//
			// const img = new Image();
			// img.crossOrigin = 'anonymous';
			// img.src = book.imageLinks.smallThumbnail;
			// fac.getColorAsync(img)
			// 	.then(color => {
			// 		console.log('Color:' );
			// 		console.log(color);
			// 		book.color = color;
			// 	})
			// 	.catch(e => {
			// 		console.log(e);
			// 	});
			//return '#4C0F16';
		//}
		//return '#2B3547';
        const colors = ['red', 'orange', 'yellow', 'cyan', 'green', 'blue', 'purple', 'brown']
        const colorIndex = Math.floor(Math.random() * colors.length);
        return colors[colorIndex];
	}

    useEffect(() => {
        const col = getBookColor();
        console.log(col);
        setColor(col);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={'book book-' + color}>
            
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
                        props.book.authors.map(author => {
                            return (
                            <div>
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