import React, { Component } from "react";
import "./App.css";
import "./AddMovie";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import Watched from "./Watched";
class App extends Component {
  render() {
    return (
      <div className="bg">
        <div className="App">
          <AddMovie />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <MovieList />
            </div>
            <div className="col">
              <Watched />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
