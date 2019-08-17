import React from 'react';
import { Link } from 'react-router-dom';

const Track = props => {
  const { item } = props;
  console.log('Item ', item);
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{item.track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play" />
              Track
            </strong>
            : {item.track.track_name}
            <br />
            <strong>
              <i className="fas fa-compact-disc" />
              Album
            </strong>
            : {item.track.album_name}
          </p>
          <Link to={`lyrics/tracks`} className="btn btn-dark btn-block">
            <i className="fas ga-chevron-right" />
            View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Track;
