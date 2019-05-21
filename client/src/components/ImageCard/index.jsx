import React from "react";
import "./style.css";

  function ImageCard(props) {
    return (
      <React.Fragment>


            <div className={`card-panel ${props.image.color}`}>
              <a href={props.image.url} target="_blank">
                <img className="responsive-img"
                  src={props.image.image}
                  alt={`flower ${props.image.id}`}
                />
              </a>
          </div>

      </React.Fragment>
    );
  }


export default ImageCard;