import React, { Component } from 'react';
import '../css/Editor.css';
import '../css/App.css';

export default class Editor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <textarea id="editor" class="round-corners bg-light" value={this.props.input} onChange={this.props.onChange} />
    )
  }
}
