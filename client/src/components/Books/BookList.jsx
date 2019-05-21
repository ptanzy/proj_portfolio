import React, {Component} from 'react';

class BookList extends Component {
    
  constructor(props) {
    super(props);
  }

    render() {
        return(
          <div className="row"> 
            <div className="col s10 offset-s1">
              <div className="card horizontal">
                <div className="card-stacked">
                  <span className="card-title">
                    {this.props.title}
                  </span>
                  <div className="card-content">
                    {this.props.children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default BookList;