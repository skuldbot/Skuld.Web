import React from 'react';

export default class FlexItem extends React.Component {
    render () {
        return (
            <li className="flexList-box">
                <span className="flexList-icon"><i className={this.props.flexClass}></i></span>
                <p className="flexList-name">{this.props.flexName}</p>
                <p className="flexList-desc">{this.props.flexDesc}</p>
            </li>
        );
    }
}