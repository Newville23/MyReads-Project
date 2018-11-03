import React, { Component } from 'react'
import * as BooksAPI from './utils/BooksAPI'
import { Router, Route } from 'react-router-dom'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'
import './style/App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({ books })
      })
    })
  }

  render() {
    let { books } = this.state
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <ListBooks books={books} moveBook={this.updateBooks} />}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks books={books} moveBook={this.updateBooks} />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
