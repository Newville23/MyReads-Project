import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf'
import WantRead from './WantRead'
import Read from './Read'

class ListBooks extends Component {
    render() {
      const shelfs = [ 
      { title: 'Currently Reading', filter: 'currentlyReading' },
      { title: 'Want to Read', filter: 'wantToRead' },
      { title: 'Read', filter: 'read' },
    ]
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content"> 
                {
                  shelfs.map((shelf) =>(
                       <BookShelf moveBook={this.props.moveBook} key={shelf.title} booksShelved={this.props.books} shelf={shelf}/>
                  ))
                }
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
          </div>
        )
    }
}

export default ListBooks;