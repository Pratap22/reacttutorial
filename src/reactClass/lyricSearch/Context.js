import React, { Component } from 'react';
import axios from 'axios';
import { API_CONSTANT, REACT_MUSIC_APP, HEROKU_CORS } from './constants';

// 1. Create a context
// 2. Provider
// 3. Conusmer

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'SEARCH_RESULT':
      return {
        ...prevState,
        track_list: action.payload,
        heading: 'Search Result'
      };
    default:
      return prevState;
  }
};

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [],
    heading: 'Top songs',
    dispatch: function(action) {
      return this.setState(function(prevState) {
        return reducer(prevState, action); // -> updated state => prevState
      });
    }
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(
        `${HEROKU_CORS}/${API_CONSTANT}/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${REACT_MUSIC_APP}`
      )
      .then(res => {
        this.setState({
          track_list: res.data.message.body.track_list,
          loading: false
        });
      })
      .catch(err => console.log('Error in Provider class ', err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Conusmer = Context.Consumer;
