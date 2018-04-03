import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI';
import {Router, Route, } from 'react-router-dom';
import ScreenBookList from './Book/List';
import ScreenBookSearch from './Book/Search';
import './style/App.css';

class ScreenRoot extends Component {
    constructor(props) {
        super(props)
        state = {
            books: []
          }
          this.StoreMoveBook = this.StoreMoveBook.bind(this);
    }


  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({ books });
    })
  }

  updateBooks(book, shelf) {
      BooksAPI.update(book, shelf)
      .then(() => {
        BooksAPI.getAll()
        .then((books) => {
          this.setState({ books })
        })
      })
    }
  
  render() {
    let { books } = this.state
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ScreenBookList StoreBooks={books} StoreMoveBook={this.updateBooks}/>
        )}/>
        <Route path="/search" render={() => (
          <ScreenBookSearch StoreBooks={books} StoreMoveBook={this.updateBooks}/>
        )}/>
      </div>
    )
  }
}

export default ScreenRoot;