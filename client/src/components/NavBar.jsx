import React, {Component} from 'react';
import { FaGoogle } from 'react-icons/fa';

// Import Materialize
import M from "materialize-css";


class NavBar extends Component {

    componentDidMount() {
      const elems = document.querySelectorAll('.sidenav');
      const instances = M.Sidenav.init(elems);
    }
    
    render() {
        return(
          <React.Fragment>
            <nav className="nav-extended grey darken-4">
              <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                  <img id="name-svg"
                    src="../../assets/images/bw_name.svg"
                    alt="Peter Tanzy name"
                    width="180" height="50"
                  />
                </a>
              </div>
            </nav>
          </React.Fragment>
        )
    }
}

export default NavBar;