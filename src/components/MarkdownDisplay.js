import React, { Component } from 'react';

export default class MarkDownDisplay extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <textarea value={this.props.input} readOnly/>
    )
  }
}
