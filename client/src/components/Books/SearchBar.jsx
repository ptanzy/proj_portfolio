import React from 'react';

// import React, {Component} from 'react';
// import { FaGoogle } from 'react-icons/fa';

// class SearchBar extends Component {

//   constructor(props) {
//     super(props);
//   }
    
  function SearchBar(props) {   //render() {
      return(
        <div className="row"> 
          <div className="col s10 offset-s1">
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                  {props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
//}

export default SearchBar;