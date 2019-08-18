import React, { Component } from 'react';
import axios from 'axios';
import { HEROKU_CORS, API_CONSTANT, REACT_MUSIC_APP } from '../constants';
import Loading from '../components/Loding';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };
  componentDidMount() {
    axios
      .get(
        `${HEROKU_CORS}/${API_CONSTANT}/track.lyrics.get?track_id=${
          this.props.match.params.id
        }&apikey=${REACT_MUSIC_APP}`
      )
      .then(res => {
        console.log('1st response ', res);
        this.setState({
          lyrics: res.data.message.body.lyrics
        });

        return axios.get(
          `${HEROKU_CORS}/${API_CONSTANT}/track.get?track_id=${
            this.props.match.params.id
          }&apikey=${REACT_MUSIC_APP}`
        );
      })
      .then(res =>
        this.setState({
          track: res.data.message.body.track
        })
      )
      .catch(err => console.log('Some error occured ', err));
  }
  render() {
    const { track, lyrics } = this.state;

    console.log('Props: ', this.props);

    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <Loading />;
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back{' '}
          </Link>
          <div className="card">
            <h5 className="card-header">
              {track.track_name} by
              <span className="text-secondary">{track.artist_name}</span>
            </h5>
            <div className="card-body">
              <p className="card-text">{lyrics.lyrics_body}</p>
            </div>
          </div>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Album ID</strong>: {track.album_id}
            </li>
            <li className="list-group-item">
              <strong>Song Genre</strong>:{' '}
              {track.primary_genres.music_genre_list.length === 0
                ? 'NO GENRE AVAILABLE'
                : track.primary_genres.music_genre_list[0].music_genre
                    .music_genre_name}
            </li>
            <li className="list-group-item">
              <strong>Explicit Words</strong>:{' '}
              {track.explicit === 0 ? 'No' : 'Yes'}
            </li>
            <li className="list-group-item">
              <strong>Release Date</strong>:{' '}
              <Moment format="YYYY-MM-DD">{track.first_release_date}</Moment>
            </li>
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default Lyrics;

// moment -> time related npm i --save moment react-moment
// loadash -> collection related (Array, Object, Map, List, Set) npm i --save lodash
// https://lodash.com/
