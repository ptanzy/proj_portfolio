import React, { Component } from 'react';
import './style.css';
import Image from "../Image/index";
import skills_images from "../../skills.json";

class Skills extends Component {

  state = {
    imageArr: skills_images,
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col s12">
            <div className="card white">
              <div className="card-content black-text">
                <span className="card-title center">My Skills</span>
                  <div className="container">
                    <div id="image-container">
                      {                   
                        this.state.imageArr.map((skill, i) => (
                          <Image key={i} image={skill}  />
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

export default Skills;