import React from 'react';

const Card = ({ title, subtitle, description, image }) => (
  <div
    className="cards"
    style={{
      backgroundImage: `url(${image})`,
    }}
  >
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="card-link">→</button>
    </div>
  </div>
);

export default Card;
