import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <Link className="saved-movie" to={`/movies/${movie.id}`}>{movie.title}</Link>
        ))}
        <Link className="home-button" to="/">Home</Link>
      </div>
    );
  }
}
