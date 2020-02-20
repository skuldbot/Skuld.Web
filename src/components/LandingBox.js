import React from 'react'

export default class LandingBox extends React.Component {
    render() {
        return (
            <div className="landing-meta">
                <img className="landing-image" src={this.props.Image} />
                <h2 className="landing-name">{this.props.Name}</h2>
                <span className="landing-slogan">{this.props.Slogan}</span>
            </div>
        );
    }
}