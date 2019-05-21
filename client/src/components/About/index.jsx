import React, {Component} from 'react';
import "./style.css";

class About extends Component {
    
  render() {
    return(
      <div className="col s12">
        <div className="card white">
          <div className="card-content black-text">
            <span className="card-title center">About Me</span>
            <div className="row valign-wrapper">
              <div className="col s3">
                <img src="../../assets/images/me.png" alt="image of me" id="personal-img" className="circle"></img> 
              </div>
              <div className="col s9">
                <span className="black-text">
                  Hi, I'm Peter Tanzy. I graduated from GCSU with a BA in history. I've completed a post bach Programming certificate from SPSU
                  and just recently finished the Georgia Tech Web Development Bootcamp. It was an intense six months but definently
                  worth every second! I've also worked in the industry for three year writing JavaScript and have experience with various
                  technologies such as D3 and Node. When away from the keyboard I enjoy cooking, nature and photography. I hope you
                  enjoyed learning just a bit about me! Oh, and please take some time to peruse some of the projects I've completed in 
                  my portfolio.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;