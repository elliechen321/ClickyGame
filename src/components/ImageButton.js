import './Image.css'
import React, { Component } from 'react'

class ImageButton extends Component {
    state = {
        stale: false,
    }

    onImageClick = () => {
        this.props.isStale(this.state.stale)
        this.setState({stale:true})
    }

    render() {
        return(
            <image src={this.props.source} className="image"/>
        )
        
    }
}

export default ImageButton