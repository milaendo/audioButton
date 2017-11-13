import React, { Component } from 'react'

class PropsButton extends Component {

	playAndPause = () => { 
	 if (this.props.play) {
	  this.props({
	    play: false
	  });this.audio.pause()
	}
	 else {
	  this.props({
	    play:true
	  });this.audio.play()
	 }
	}

	render () {
		return (
			{this.props.map(data => 
				<div className='wrapper'>
				 <audio src={data.url} ref={(audio) => {this.audio = audio}} />
				 <div onClick={this.playAndPause} className={!this.state.play ? "play" : "pause"} />
				 <p className='display_text'>{data.displayName},{data.duration}</p>
				</div>
			)}
		)
	}
}

export default PropsButton