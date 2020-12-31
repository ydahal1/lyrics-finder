import React from "react";
import { Consumer } from "../../context.js";
import "./tracks.css";
import Spinner from "../Layout/Spinner";
import Track from "./Track.jsx";

function Tracks() {
  return (
    <div className="tracks">
      <Consumer>
        {value => {
          const { track_list, heading } = value;

          if (track_list === undefined || track_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h3 className="tracks__pageheading">{heading}</h3>
                <div className="row">
                  {track_list.map(track => (
                    <Track key={track.track.track_id} track={track.track} />
                  ))}
                </div>
              </React.Fragment>
            );

            // return <Track track_list={track_list} />;
            // return <h1>{value.track_list.length}</h1>;
          }
        }}
      </Consumer>
    </div>
  );
}

export default Tracks;
