import React, { Component } from "react";
// import Header from "../components/Header";
import BookList from "../components/Books/BookList";
import BookItem from "../components/Books/BookItem";
import API from "../utils/API";
import { Link } from "react-router-dom";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    API.getBooks()
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err));
    // axios.get("/api/books")
    //   .then(res => this.setState({books: res.data}))
    //   .catch(err => console.log(err));
  }

  deleteBook = book => {
    API.deleteBook(book._id)
      .then(res => this.setState({books: this.state.books.filter(delBook => delBook._id !== book._id)}))
      .catch(err => console.log(err));
    // axios.delete(`/api/books/${book._id}`)
    //   .then(res => this.setState({books: this.state.books.filter(delBook => _delBook._id !== book._id)}))
    //   .catch(err => console.log(err));
  }

  render() {
    return (
      <BookList title={"Saved Books"}>
      {
        this.state.books.length ? (
          this.state.books.map((book, index) => (
              <BookItem bookItem={book} key={"BookItem"+index}>
                <a className={`btn-floating halfway-fab waves-effect waves-light red`}  onClick={()=> {this.deleteBook(book)}}>
                  <i className="material-icons">remove</i>
                </a>
              </BookItem>
          ))
        ) : (
          <h4>No Books to Display</h4>
        )
      }
    </BookList>
    );
  }
}

export default Saved;