import React from 'react';
import ReactDOM from 'react-dom';
import '../css/divs.css';

class Divs extends React.Component{

  triggerAnimationFade = () => {
    var div = document.querySelector("#fade");
    if(div.className === "div fade"){
      div.className = "div fade-in";
    }else if(div.className==="div fade-in"){
      div.className = "div fade-out";
    }else if(div.className === "div fade-out"){
      div.className = "div fade-in";
    }

  }

  triggerAnimationSlideH = () =>{
    var div = document.querySelector("#slideH");
    if(div.className === "div slideH"){
      div.className = "div slide-out";
    }else if(div.className === "div slide-out"){
      div.className = "div slide-in";
    }else if(div.className === "div slide-in"){
      div.className = "div slide-out";
    }

  }

  triggerAnimationSlideV = () =>{
    var div = document.querySelector("#slideV");
    if(div.className === "div slideV"){
      div.className = "div slide-up";
    }else if(div.className === "div slide-up"){
      div.className = "div slide-down";
    }else if(div.className === "div slide-down"){
      div.className = "div slide-up";
    }

  }

  triggerAnimationSlideA = () =>{
    var div = document.querySelector("#slideA");
    if(div.className === "div slideA"){
      div.className = "div slide-bottom-corner";
    }else if(div.className === "div slide-bottom-corner"){
      div.className = "div slide-upper-corner";
    }else if(div.className === "div slide-upper-corner"){
      div.className = "div slide-bottom-corner";
    }

  }

  triggerAnimationSqueeze = () =>{
    var div = document.querySelector("#squeeze");
    if(div.className === "div squeeze"){
      div.className = "div squeeze-in";
    }else if(div.className === "div squeeze-in"){
      div.className = "div squeeze-out";
    }else if(div.className === "div squeeze-out"){
      div.className = "div squeeze-in";
    }

  }

  triggerAnimationSqueezeC = () =>{
    var div = document.querySelector("#squeezeC");
    if(div.className === "div squeezeC"){
      div.className = "div contracts";
    }else if(div.className === "div contracts"){
      div.className = "div expands";
    }else if(div.className === "div expands"){
      div.className = "div contracts";
    }

  }

  triggerAnimationRotate = () =>{
    var div = document.querySelector("#rotate");
    if(div.className === "div rotate"){
      div.className = "div rotating-clock";
    }else if(div.className === "div rotating-clock"){
      div.className = "div rotating-counter-clock";
    }else if(div.className === "div rotating-counter-clock"){
      div.className = "div rotating-clock";
    }

  }

   selectedAnimation = () =>{
    if(this.props.selectedAnimation === "fade"){
      this.triggerAnimationFade();
    }else if(this.props.selectedAnimation === "slideH"){
      this.triggerAnimationSlideH();
    }else if(this.props.selectedAnimation === "slideV"){
      this.triggerAnimationSlideV();
    }else if(this.props.selectedAnimation === "slideA"){
      this.triggerAnimationSlideA();
    }else if(this.props.selectedAnimation === "squeeze"){
      this.triggerAnimationSqueeze();
    }else if(this.props.selectedAnimation === "squeezeC"){
      this.triggerAnimationSqueezeC();
    }else if(this.props.selectedAnimation === "rotate"){
      this.triggerAnimationRotate();
    }
  }

  componentDidUpdate(){
    this.selectedAnimation();
  }





  render(){
    return(
    <div>
      <div id = 'topDiv' className = "ui container">
        <div className = "div fade" id = "fade" ></div>
        <div className = "div slideH" id = "slideH" ></div>
        <div className = "div slideV" id = "slideV" ></div>
        <div className = "div slideA" id = "slideA" ></div>
        <div className = "div squeeze" id = "squeeze"></div>
        <div className = "div squeezeC" id = "squeezeC"></div>
        <div className = "div rotate" id = "rotate"></div>
      </div>
      <div id = "topDiv">
        <div>Fading div</div>
        <div>Sliding horizontally div</div>
        <div>Sliding vertically div</div>
        <div>Sliding around div</div>
        <div>Squeezing div</div>
        <div>Contract-expand div</div>
        <div>Rotating div</div>
      </div>
    </div>

    );
  }
}

export default Divs;
