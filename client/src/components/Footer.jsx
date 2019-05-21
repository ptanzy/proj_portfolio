

import React, {Component} from 'react';
import { FaGoogle } from 'react-icons/fa';

class Footer extends Component {
    
    render() {
        return(
          <footer className="page-footer">
            <div className="footer-copyright">
              <div className="container">
                <div className="row">
                  <span className="left grey-text text-lighten-4">© 2019 Peter Tanzy</span>
                  <a className="center col s8 grey-text text-lighten-4" href="/"><FaGoogle /> Books</a>
                  <a className="right grey-text text-lighten-4" href="https://github.com/ptanzy">GitHub</a>
                </div>
              </div>
            </div>
          </footer>
        )
    }
}

export default Footer;