import React from 'react'
import BookList from '../../components/Book/List'

function ScreenBookList (props) {
  return (
    <div>
      <BookList books={props.StoreBooks} moveBook={props.StoreMoveBook} />
    </div>
  )
}

export default ScreenBookList
