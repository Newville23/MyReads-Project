import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookItem extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    static PropTypes = {
        book: PropTypes.object.isRequireds,
        moveAction: PropTypes.func.isRequireds
    }
    handleChange(value) {
        this.props.moveAction( this.props.book, value)
    }
    render() {
        //Object destructuring -> to keep the code clean 
        const { book } = this.props
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                          <select value={this.props.book.shelf} onChange={(event) => this.handleChange(event.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ book.title }</div>
                <div className="book-authors">{ book.authors}</div>
            </div>
        )
    }
}

export default BookItem;