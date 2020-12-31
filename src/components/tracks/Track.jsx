import React from "react";
import { Link } from "react-router-dom";
import "./track.css";

function Track({ track }) {
  return (
    <div className="track container col-md-6">
      <div className=" card mb-4 shadow-sm">
        <div className="card-body track__card__body">
          <h5> {track.artist_name.toUpperCase()}</h5>
          <p className="card-text">
            <strong>
              <i className="fa fa-play" aria-hidden="true"></i> Track
            </strong>{" "}
            : {track.track_name} <br />
            <strong>Album</strong>
            {"  "}: {track.album_name}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-primary btn-block viewmore-btn"
          >
            View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Track;
