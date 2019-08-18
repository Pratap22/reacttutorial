import React, { Component } from 'react';
import { Conusmer } from '../Context';
import axios from 'axios';
import { HEROKU_CORS, API_CONSTANT, REACT_MUSIC_APP } from '../constants';

class Search extends Component {
  state = {
    trackTitle: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  findLyrics = (e, dispatch) => {
    e.preventDefault();

    axios
      .get(
        `${HEROKU_CORS}/${API_CONSTANT}/track.search?q_track=${
          this.state.trackTitle
        }&page_size=10&page=1&s_track_rating=desc&apikey=${REACT_MUSIC_APP}`
      )
      .then(res => {
        dispatch({
          type: 'SEARCH_RESULT',
          payload: res.data.message.body.track_list
        });
      });
  };

  render() {
    return (
      <Conusmer>
        {value => {
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music" /> Search For A Song
              </h1>
              <p className="lead text-center">Get the lyrics for any song</p>
              <form onSubmit={e => this.findLyrics(e, value.dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Song title..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block mb-5"
                  type="submit"
                >
                  Get Track Lyrics
                </button>
              </form>
            </div>
          );
        }}
      </Conusmer>
    );
  }
}
export default Search;
