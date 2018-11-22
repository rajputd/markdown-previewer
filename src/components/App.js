import React, { Component } from "react";
import Editor from './Editor.js';
import MarkDownDisplay from './MarkdownDisplay.js';
import config from '../config.js';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: config.welcomeScript
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  render(){
    return(
      <div id="App">
        <h1 class="center header-font text-light">Markdown Previwer</h1>
        <p class="text-light">
          {config.acknowledgements}
        </p>
        <div id="markdown-previewer">
          <Editor input={this.state.input} onChange={this.handleChange}/>
          <MarkDownDisplay input={this.state.input}/>
        </div>
      </div>
    );
  }
}
 export default App;
