import React, { Component } from 'react';
import Marked from 'marked';
import '../css/MarkdownDisplay.css';
import '../css/App.css';

//set up Marked to sanitize html
Marked.setOptions({
  sanitize: true,
  sanitizer: (input) => {
    return input.replace(/&/g,'&amp;')
                .replace(/</g,'&lt;')
                .replace(/>/g,'&gt;');
  }
});

export default class MarkDownDisplay extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const markdown = Marked(this.props.input);
    return (
      <div id="preview" class="round-corners bg-light" dangerouslySetInnerHTML={{__html: markdown}} />
    )
  }
}
