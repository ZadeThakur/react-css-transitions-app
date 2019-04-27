import React from 'react';
import ReactDOM from 'react-dom';
import "../css/animationsMenu.css";

class AnimationsMenu extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        fade: "Fade out",
        slideH: "Slide out right",
        slideV: "Slide out up",
        slideA: "Slider out",
        squeeze: "Width out",
        squeezeC: "Size out",
        rotate: "Rotate out"
    }
  }


  onAnimationClick = (event) =>{
    this.props.onAnimationSelect(event.target.value);
    if(event.target.value === "fade"){
      if(this.state.fade === "Fade out"){
        this.setState({fade: "Fade In"})
        event.target.className = "ui green basic button"
      }else{
        this.setState({fade: "Fade out"})
        event.target.className = "ui red basic button"
      }
    }else if(event.target.value === "slideH"){
      if(this.state.slideH === "Slide out right"){
        this.setState({slideH: "Slide in left"})
        event.target.className = "ui green basic button"
      }else{
        this.setState({slideH: "Slide out right"})
        event.target.className = "ui red basic button"
      }
    }else if(event.target.value === "slideV"){
      if(this.state.slideV === "Slide out up"){
        this.setState({slideV: "Slide in down"})
        event.target.className = "ui green basic button"
      }else{
        this.setState({slideV: "Slide out up"})
        event.target.className = "ui red basic button"
      }
    }else if(event.target.value === "slideA"){
      if(this.state.slideA === "Slider out"){
        this.setState({slideA: "Slider in"})
        event.target.className = "ui green basic button"
      }else{
        this.setState({slideA: "Slider out"})
        event.target.className = "ui red basic button"
      }
    }else if(event.target.value === "squeeze"){
      if(this.state.squeeze === "Width out"){
        this.setState({squeeze: "Width in"})
        event.target.className = "ui green basic button"
      }else{
        this.setState({squeeze: "Width out"})
        event.target.className = "ui red basic button"
      }
    }else if(event.target.value === "squeezeC"){
      if(this.state.squeezeC === "Size out"){
        this.setState({squeezeC: "Size in"})
        event.target.className = "ui green basic button"
      }else{
        this.setState({squeezeC: "Size out"})
        event.target.className = "ui red basic button"
      }
    }else if(event.target.value === "rotate"){
      if(this.state.rotate === "Rotate out"){
        this.setState({rotate: "Rotate in"})
        event.target.className = "ui green basic button"
      }else{
        this.setState({rotate: "Rotate out"})
        event.target.className = "ui red basic button"
      }
    }

  }

  render(){

    return(
      <div className = "ui container" id = "topDiv">
        <button className = "ui red basic button" value="fade" onClick={this.onAnimationClick}>{this.state.fade}</button>
        <button className = "ui red basic  button" value="slideH" onClick={this.onAnimationClick}>{this.state.slideH}</button>
        <button className = "ui red basic  button" value="slideV" onClick={this.onAnimationClick}>{this.state.slideV}</button>
        <button className = "ui red basic  button" value="slideA" onClick={this.onAnimationClick}>{this.state.slideA}</button>
        <button className = "ui red basic  button" value="squeeze" onClick={this.onAnimationClick}>{this.state.squeeze}</button>
        <button className = "ui red basic  button" value="squeezeC" onClick={this.onAnimationClick}>{this.state.squeezeC}</button>
        <button className = "ui red basic  button" value="rotate" onClick={this.onAnimationClick}>{this.state.rotate}</button>
      </div>
    );
  }
}

export default AnimationsMenu;
