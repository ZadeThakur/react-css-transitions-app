import React from 'react';
import ReactDOM from 'react-dom';
import AnimationsMenu from './AnimationsMenu';
import Divs from './Divs';
import '../css/app.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      changedClass: ""
    };
  }

  onAnimationSelection = (term) =>{
    this.setState({changedClass: term})
  }

  render(){
    return(
      <div className="ui container">
        <h1>React css animations</h1>
        <div id = "animations-menu">
          <AnimationsMenu onAnimationSelect = {this.onAnimationSelection} selectedDiv = {this.state.clickedDiv}/>
        </div>
        <div id = 'divs'>
          <Divs selectedAnimation = {this.state.changedClass} onDivClick = {this.onDivClick}/>
        </div>
      </div>
    );
  }
}

export default App;
