import React, { Component } from 'react';

export default class Editor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <textarea value={this.props.input} onChange={this.props.onChange} />
    )
  }
}
