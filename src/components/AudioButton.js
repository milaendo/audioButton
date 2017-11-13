import React, { Component } from 'react'


class AudioButton extends Component {
  state = {
      duration:'',
      play: false,
      displayName:'',
      url:'http://k002.kiwi6.com/hotlink/f7oefpl27m/Dreams_Piano_and_Violin_Solo_.wav'
    }

  playAndPause = () => { 
   if (this.state.play) {
    this.setState({
      play: false
    });this.audio.pause()
  }
   else {
    this.setState({
      play:true
    });this.audio.play()
   }
  }

  render() {

    return (
      <div className='wrapper'>
       <audio src={this.state.url} ref={(audio) => {this.audio = audio}} />
       <div onClick={this.playAndPause} className={!this.state.play ? "play" : "pause"} />
       <p className='display_text'>{this.state.displayName},{this.state.duration}</p>
      </div>
    );
  }
}

export default AudioButton