import React from 'react'
import PropTypes from 'prop-types'
import BookItem from './Item'

function BookShelf (props) {
  const { shelf, booksShelved } = props
  let rackBooks = booksShelved.filter(book => book.shelf === shelf.filter)
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelf.title}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {rackBooks.map(bookShelved => (
            <li key={bookShelved.id}>
              <BookItem moveAction={props.moveBook} book={bookShelved} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

BookShelf.PropTypes = {
  shelf: PropTypes.object.isRequireds,
  booksShelved: PropTypes.array.isRequireds
}

export default BookShelf
