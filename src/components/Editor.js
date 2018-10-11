import React, { Component } from 'react';
import '../css/Editor.css';

export default class Editor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <textarea id="editor" value={this.props.input} onChange={this.props.onChange} />
    )
  }
}
