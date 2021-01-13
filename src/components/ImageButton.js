import React from 'react'

export default class ImageButton extends React.Component {
    render() {
        return (
            <button className="appButton">
                <img src={this.props.imageUrl} alt="error"/>
            </button>
        )
    }
}