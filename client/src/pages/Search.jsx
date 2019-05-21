import React, { Component } from "react";
import Header from "../components/Header";
import SearchBar from "../components/Books/SearchBar";
import BookList from "../components/Books/BookList";
import BookItem from "../components/Books/BookItem";
import SaveButton from "../components/Books/SaveButton";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
// Import Materialize
import M from "materialize-css";

const axios = require("axios");

class Search extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     search: "",
  //     books: [],
  //     error: ""
  //   }
  // }

  state = {
    search: "",
    books: [],
    error: "",
    disabled: false
  }


  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    API.search(this.state.search)
      .then(res => {
        console.log("Search book")
        const books = [];
        if (res.error) {
          throw new Error(res.error.message);
        } else {
          if(res.totalItems !== undefined && res.totalItems === 0){
            throw new Error("Your book query returned no results. Please try again.");
          }else{
            const volumesInfo = res.data.items;
            volumesInfo.forEach((book, i)=>{
              const bookInfo = book.volumeInfo;
              const bookObj = {
                title: bookInfo.title,
                authors: bookInfo.authors,
                description: "Book has no description",
                link: bookInfo.infoLink
              }
              if(bookInfo.description && bookInfo.description.length > 500){
                bookObj.description = bookInfo.description.substring(0, 499);
              }
              if(bookInfo.imageLinks && bookInfo.imageLinks.thumbnail){
                bookObj.image = bookInfo.imageLinks.thumbnail;
              }
              books.push(bookObj);
            });
            this.setState({ books: books, error: "" });
          }
        }
      })
      .catch(err =>   M.toast({html: `Error: ${err.message}`, classes: 'rounded'}) ); //this.setState({ error: err.message }));
  };

  saveBook = (book) => {

    API.saveBook(book)
      .then(res => {
        console.log(res.data)
        const bookTitle = res.data.title?res.data.title:"book"
        M.toast({html: `Successfully saved ${bookTitle}.`, classes: 'rounded'})
      })
      .catch(err => {
        console.log(err.response)
        M.toast({html: `Save failed for ${book.title}. Error: ${err.response}`, classes: 'rounded'});
      });

  };

  render() {
    return (
      <div>
        <Header/>
        <SearchBar>
          <form id="news-form" className="container" onSubmit={e => e.preventDefault()}>
            <div className="row valign center">
              <div className="input-field"> 
                <input id="search" type="search" value={this.state.search} onChange={this.handleInputChange} required></input>
                <label htmlFor="search" className="active">Book Title</label>
                <i className="material-icons">close</i>
              </div>
            </div>
            <div className="row">
              <button type="button" className="btn waves-effect waves-light col s3 right" disabled={!this.state.search} onClick={this.handleFormSubmit}><FaGoogle/> Book
                <i className="material-icons right">search</i>
              </button>
            </div>
          </form>
        </SearchBar>
        <BookList title={"Search Results"}>
          {
            this.state.books.length ? (
              this.state.books.map((book, index) => (
                  <BookItem bookItem={book} key={"BookItem"+index}>
                    <a className={`btn-floating halfway-fab waves-effect waves-light green`} onClick={()=> this.saveBook(book)}>
                      <i className="material-icons">add</i>
                    </a>
                  </BookItem>
              ))
            ) : (
              <h4>No Books to Display</h4>
            )
          }
        </BookList>
      </div>
    );
  }
}

export default Search;