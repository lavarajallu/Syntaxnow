import React from 'react';

const AboutCard = ({ title, subtitle, description, image })=> (
    <div className="indus-card">
        <img src={image} alt={title} />
         <h3>{title}</h3>
         <p>{description}</p>
         <button className="card-link">→</button>
    </div>
);

export default AboutCard;
