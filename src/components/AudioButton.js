import React, { Component } from 'react'



class AudioButton extends Component {
  state = {
      duration:'',
      play: false,
      displayName:'',
      url:''
    }

  play = () => {
    this.setstate(
      'play': true
    )
  }

  render() {

    return (
      <div>
       <audio onClick={this.play} className="AudioButton" src={this.url} autoPlay controls/>
       <p>{this.displayName}</p>
      </div>
    );
  }
}

export default AudioButton