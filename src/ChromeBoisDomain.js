import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
   handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

   
  handleKeyDown = (event) => {
    if (event.key === 'a') {
      resize('+')
    } else if (event.key === 's') {
      resize('-')
    }
  }
   
  
  
  
  render() {
    return (
      <canvas 
<<<<<<< HEAD
        onKeyDown={this.handleKeyDown}
        onClick={() => {toggleCycling()}}
=======
        onKeyPress={resize}
        a.key={resize}
>>>>>>> e46696a8b936ebcb84728063f98cf90b059ac635
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
