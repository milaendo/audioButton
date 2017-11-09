import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player'


class AudioButton extends Component {
  state={
    duration:'',
    play: false
  }

  play = () => {
    this.setstate{
      play: true
    }
  }

  render() {
    
    return (
      <div onClick={this.play} className="AudioButton">
       <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls/>
      </div>
    );
  }
}

export default AudioButton
