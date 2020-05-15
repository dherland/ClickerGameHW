import React from 'react';
import "./style.css";

function CharacterCard(props) {
  return (
      <div className="card col-lg-4" onClick={props.onClick}>
          
              <img src={props.image} />
         

      </div>
  )
}
  
  export default CharacterCard;