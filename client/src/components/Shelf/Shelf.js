import React, {useState, useEffect} from 'react';

import './Shelf.scss';

function Shelf(props) {
    //const [books, setBooks] = useState([]);

    return(
        <div className="shelf">
            <div className="books-on-shelf-container">{props.children}</div>
            <hr className="shelf-base" />
        </div>
        
    );

}

export default Shelf;