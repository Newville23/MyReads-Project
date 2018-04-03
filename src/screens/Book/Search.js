import React from 'react';
import BookSearch from '../../components/Book/Search';

function ScreenBookSearch(props) {
    return(
        <div>
            <BookSearch books={props.StoreBooks} moveBook={props.StoreMoveBook}/>
        </div>
    )
}

export default ScreenBookSearch; 