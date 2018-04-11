import React from "react";
import "./GameCard.css";

const GameCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        {/* <li>
          <strong>Image:</strong> {props.image}
        </li> */}
        {/* <li>
          <strong>Address:</strong> {props.location}
        </li> */}
      </ul>
    </div>
    <span onClick={() => props.removeFriend(props.id)} className="remove">
      x
    </span>
    {/* <span className="remove">𝘅</span> */}
  </div>
);

export default GameCard;
