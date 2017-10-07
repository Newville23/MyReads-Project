import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CurrentlyReading from './CurrentlyReading'
import WantRead from './WantRead'
import Read from './Read'

class ListBooks extends Component {
    render() {
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading/>
                <WantRead/>
                <Read/>
              </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
          </div>
        )
    }
}

export default ListBooks;