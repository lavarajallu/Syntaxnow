import React from 'react';

const Card = ({ title, subtitle, description, image, link }) => (
  <div className="card">
    <img src={image} alt={title} className="card-image" />
    <div className="card-content">
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <p>{description}</p>
      <button className="card-link">Read more →</button>
    </div>
  </div>
);

export default Card;
