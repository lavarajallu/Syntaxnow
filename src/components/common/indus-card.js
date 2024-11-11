import React from 'react';

const IndusCard = ({ title, image }) => (
    <div className="indus-card">
        <p className='indus-title'>{title}</p>
        <img src={image} alt={title} />
    </div>
);

export default IndusCard;