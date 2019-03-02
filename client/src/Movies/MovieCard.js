import React from 'react';


const MovieCard = ({ movie }) => {
  const {id, title, director, metascore, stars} = movie;
  return (
    <div className="movie-card">
      <h2>{ title }</h2>
      <div className="movie-director">
        Director: {director}
      </div>
      <div className="movie-metascore">
        Metascore: {metascore}
      </div>
      <h3>Actors</h3>
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>

        ))}


    </div>
  )
};






export default MovieCard;
