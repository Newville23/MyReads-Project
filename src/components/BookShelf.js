import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from './Book'

class BookShelf extends Component {
    render() {
        const { shelf, booksShelved } = this.props
        let rackBooks = booksShelved.filter((book) => book.shelf === shelf.filter); 
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            rackBooks.map((bookShelved) => (
                                <li key={bookShelved.id}>
                                    <Book moveAction={this.props.moveBook}  book={bookShelved} />
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;