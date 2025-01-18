import React from 'react';

const ApodCard = ({ title, imageUrl, description, date }) => (
  <div className="card text-center bg-dark text-light">
    <h2 className="card-title">{title}</h2>
    <p className="text-muted">{date}</p>
    <img src={imageUrl} alt={title} className="card-img-top" />
    <div className="card-body">
      <p className="card-text">{description}</p>
    </div>
  </div>
);

export default ApodCard;
