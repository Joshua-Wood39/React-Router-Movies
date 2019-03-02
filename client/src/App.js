import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    const titleCheck = this.state.savedList.map(element => element.title);
    if (!titleCheck.includes(movie.title)) {
      console.log(savedList);
      savedList.push(movie);
      this.setState({ savedList });
    } else {
      alert("Already in save list!");
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route 
          path="/movies/:id" 
          render= { (props) => (
            <Movie
              {...props}
              addToSavedList={this.addToSavedList}
            />
          )}
        />
      </div>
    );
  }
}
