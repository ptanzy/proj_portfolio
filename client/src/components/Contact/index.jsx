import React, { Component } from 'react';
import './style.css';


class Contact extends Component {



  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col s12">
            <div className="card white">
              <div className="card-content black-text">
                <span className="card-title center">Contact Me</span>
                <span className="card-title center"><b>E-mail: ptanzy.jobs@gmail.com</b></span>
                  <div className="container center">
                    <a href="https://www.linkedin.com/in/pjtanzy/" target="_blank" className="fa fa-linkedin"></a>
                    <a href="https://www.instagram.com/nkumeconstantine/" target="_blank" className="fa fa-instagram"></a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;