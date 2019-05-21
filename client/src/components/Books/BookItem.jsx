// import React, {Component} from 'react';
import React from 'react';

// class BookItem extends Component {

//     constructor(props) {
//       super(props);
//     }
    
    function BookItem(props) {   //render() {
        return(
          <div className="col s12 book-item">
            <div className="card horizontal">
              <div className="card-image">
                  <img className="responsive-img margin" src={props.bookItem.image} alt="Book Cover" width="300" height="300"></img>
              </div>       
              <div className="card-stacked">
                <div className="card-content">
                  {props.children}
                  <span className="card-title"><b>{props.bookItem.title}</b></span>
                  <span className="card-title">{props.bookItem.authors}</span>
                  <p>{props.bookItem.description}</p>
                </div>
                <div className="card-action">
                 <a className="left" href={props.bookItem.link}>View</a>
                </div>
              </div>
            </div>
          </div>
        )
    }
//}

export default BookItem;
