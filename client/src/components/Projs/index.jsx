import React, { Component } from 'react';
import './style.css';
import ImageCard from "../ImageCard/index";
import projs_images from "../../proj.json";

class Projects extends Component {

  state = {
    imageArr: projs_images,
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col s12">
            <div className="card white">
              <div className="card-content black-text">
                <span className="card-title center">My Portfolio</span>
                  <div className="container">
                    <div id="image-container">
                      {                   
                        this.state.imageArr.map((proj, i) => (
                          <ImageCard key={i} image={proj}  />
                        ))
                      }
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;