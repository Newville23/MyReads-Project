import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './Shelf'
import PropTypes from 'prop-types'

function BookList (props) {
  const shelfs = [
    { title: 'Currently Reading', filter: 'currentlyReading' },
    { title: 'Want to Read', filter: 'wantToRead' },
    { title: 'Read', filter: 'read' }
  ]
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        {shelfs.map(shelf => (
          <BookShelf
            moveBook={props.moveBook}
            key={shelf.title}
            booksShelved={props.books}
            shelf={shelf}
          />
        ))}
      </div>
      <div className='open-search'>
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  )
}

BookList.PropTypes = {
  moveBook: PropTypes.func.isRequired,
  booksShelved: PropTypes.array.isRequired
}

export default BookList
