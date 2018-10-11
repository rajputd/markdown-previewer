import React, { Component } from "react";
import Editor from './Editor.js';
import MarkDownDisplay from './MarkDownDisplay.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  render(){
    return(
      <div className="App">
        <Editor input={this.state.input} onChange={this.handleChange}/>
        <MarkDownDisplay input={this.state.input}/>
      </div>
    );
  }
}
 export default App;
