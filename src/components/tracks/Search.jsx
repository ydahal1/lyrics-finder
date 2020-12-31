import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";
import "./search.css";

class Search extends Component {
  state = {
    trackKeywords: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${this.state.trackKeywords}&page_size=10&page=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        dispatch({
          type: "SEARCH TRACKS",
          payload: res.data.message.body.track_list
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="search card card-body mb-4 p-4">
              <p className="lead text-center">Get the lyrics for any song</p>
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="song keywords"
                    name="trackKeywords"
                    value={this.state.trackKeywords}
                    onChange={this.onChange}
                  />
                </div>
                <button className="btn btn-primary btn-lg btn-block mb-5">
                  Get Lyrics
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
