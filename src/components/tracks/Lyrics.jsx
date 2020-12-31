import React, { Component } from "react";
import axios from "axios";
import Moment from "react-moment";
import Spinner from "../Layout/Spinner";
import "./lyrics.css";
import { Link } from "react-router-dom";
class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };

  componentDidMount() {
    const getLyrics = axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
    );

    const getSongData = axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
    );

    axios
      .all([getLyrics, getSongData])
      .then(
        axios.spread((...allData) => {
          this.setState({
            lyrics: allData[0].data.message.body.lyrics.lyrics_body,
            track: allData[1].data.message.body.track
          });
        })
      )
      .catch(err => console.log(err));
  }
  render() {
    const { track, lyrics } = this.state;

    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return (
        <div className="lyrics">
          <Spinner />
        </div>
      );
    } else {
      return (
        <div className="lyrics container">
          <div className="card">
            <div className="card-header">
              <Link to="/" className="btn btn-dark btn-sm mb-4">
                Back
              </Link>
              <div>
                <h5>{track.track_name}</h5>
                <span className="text-secondary">{track.artist_name}</span>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">{lyrics}</p>
            </div>
            <div className="card-footer">
              <div className="list-group-item">
                <strong>Album Id </strong> : {track.album_id}
              </div>

              <div className="list-group-item">
                <strong>Explicit Words </strong> :{" "}
                {track.explicit === 0 ? "No" : "Yes"}
              </div>
              <div className="list-group-item">
                <strong>Updated on </strong> :{" "}
                <Moment format="MM/DD/YYYY">{track.updated_time}</Moment>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Lyrics;
