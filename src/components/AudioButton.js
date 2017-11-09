import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player'


class AudioButton extends Component {
  render() {
    return (
      <div className="AudioButton">
       <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls/>
      </div>
    );
  }
}

export default AudioButton
