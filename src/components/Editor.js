import React, { Component } from 'react';

export default class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  render() {
    return (
      <textarea value={this.state.input} onChange={this.handleChange} />
    )
  }
}
