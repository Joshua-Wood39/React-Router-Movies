import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div className="movie-list">
      
        {this.state.movies.map(e=> (
          <MovieDetails movie={e} key={e.id} />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  const {id} = movie;
  return (
    <Link to={`/movies/${id}`} className="movie-card">
      <MovieCard movie = {movie} />
    </Link>
  );
}