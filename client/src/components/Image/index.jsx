import React from "react";
import "./style.css";

  function Image(props) {
    return (
      <React.Fragment>


            <div className={`card-panel ${props.image.color}`}>
              <img className="responsive-img"
                src={props.image.image}
                alt={`flower ${props.image.id}`}
              />
          </div>

      </React.Fragment>
    );
  }


export default Image;