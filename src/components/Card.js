import { Link } from "react-router-dom";
import React from "react";

const Card = ({ show }) => {
  const rating = show.rating.average;

  return (
    <Link to={`/show/${show.id}`} className="card">
      <img className="bot-img" src={show.image.medium} alt={show.name} />
      <div className="card-footer">
        <p className="card-name">{show.name}</p>
        <div className="card-rating">
          <span className={`card-rating-circle ${rating > 8.5 ? "yell" : ""}`}>
            {rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
