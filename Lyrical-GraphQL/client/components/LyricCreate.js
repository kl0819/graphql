import React, { Component } from 'react';
import { graphql } from 'react-apollo'; // connect graphql query with component 
import gql from 'graphql-tag'; // queries direct with javascript code

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '' 
    };

  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: { 
        content: this.state.content,
        songId: this.props.songId
      }
    }).then(() =>  this.setState({ content: '' }));
    // this.setState({ content: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input 
          value={ this.state.content}
          onChange={event => this.setState({content: event.target.value })}
        /> 
      </form>
    );
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content 
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);