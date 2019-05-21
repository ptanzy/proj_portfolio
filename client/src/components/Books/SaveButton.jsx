import React, {Component} from 'react';

const axios = require("axios");

class SaveButton extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    disabled: ""
  }

  saveBook = book => {
    let success = true;
    axios.post("/api/books", book)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err.response)
        success = false;
      });
    if(success = true){
      this.state.disabled = "disabled";
    }  
  };
  
  render() {
      return(
        <a className={`btn-floating halfway-fab waves-effect waves-light ${this.state.disabled} ${this.props.color}`} onClick={this.saveBook(this.props.book)}>
          <i className="material-icons">add</i>
        </a>
      )
  }
}


export default SaveButton;