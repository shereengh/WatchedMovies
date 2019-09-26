import React, { Component } from "react";
import { addMovie } from "./stores/action";
import { connect } from "react-redux";

class AddMovie extends Component {
  state = {
    input: ""
  };
  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };
  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Movies..."
          onChange={event => this.handleChange(event)}
          value={this.state.input}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary btn btn-info"
            type="submit"
            id="button-addon2"
            onClick={() => this.props.addMovie(this.state.input)}
          >
            + Add
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addMovie: movie => dispatch(addMovie(movie))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMovie);
