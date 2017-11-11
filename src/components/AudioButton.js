import React, { Component } from 'react'


class AudioButton extends Component {
  state = {
      duration:'',
      play: false,
      displayName:'',
      url:''
    }

  play = () => { 
    this.setState({
      'play': true
    }
    )
  }

  pause = () => {
    this.setState({
      'play': false 
    }
    )
  }
  render() {

    return (
      <div>
       <audio src={this.state.url}/>
       <div onClick={this.play} onPause={this.pause} className={!this.state.play ? "play" : "pause"} />
       <p>{this.state.displayName},{this.state.duration}</p>
      </div>
    );
  }
}

export default AudioButton