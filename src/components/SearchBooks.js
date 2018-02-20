import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'
import * as BooksAPI from '../utils/BooksAPI'
import { Debounce } from 'react-throttle';

class SearchBooks extends Component {
    static PropTypes = {
        books: PropTypes.array.isRequired,
        moveBook: PropTypes.func.isRequired
    }
    state = {
        query: '',
        searchedBooks: []
    }
    updateBookShelf = (results) => {
        let books = results.map((book) => {
            let found = this.props.books.find((b) => b.id === book.id)
            if(found){
                book.shelf = found.shelf
            }
            if(!book.shelf){
                book.shelf = "none"
            }
            return book 
        })
        this.setState({searchedBooks: books}) 
    }
    searchBooks = (query) => {
        this.setState({query: query.trim()})
        if (query){

            BooksAPI.search(query.trim(), 20).then((results) => {
                if(!results || results.error){
                    this.setState({searchedBooks: []})
                } else {
                    this.updateBookShelf(results)
                }
            })           
        } else {
            this.setState({searchedBooks: []})
        }  
    }
    updateQuery = (query) => {
        this.setState(() => ({ query: query.trim() }));
        this.searchBooks(query);
    }

    render() {
        let { query, searchedBooks } = this.state
        
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <Debounce time="400" handler="onChange">
                            <input 
                                onChange={(event) => this.updateQuery(event.target.value)} 
                                type="text" 
                                placeholder="Search by title or author" 
                            />
                        </Debounce>
                    </div>
                </div>
                <div className="search-books-results">
                { searchedBooks.length !== 0 ? (
                    <ol className="books-grid">
                        {  searchedBooks.map(searchBook => (
                                    <li key={searchBook.id}>
                                        <Book moveAction={this.props.moveBook}  book={searchBook} />
                                    </li>
                            ))
                         }  
                        
                    </ol>
                ):(
                    <p> We haven't found results for your query </p>
                )}
                </div>
            </div>
        )
    }
}

export default SearchBooks;