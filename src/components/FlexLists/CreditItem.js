import React from "react";
import PlatformLinkList from "../LinkList/PlatformLinkList";

export default class CreditItem extends React.Component {
  render() {
    return (
      <li className="flexList-box">
        <div className="credit-image">
          <img src={this.props.src} alt="Member Avatar" />
        </div>
        <span className="credit-name bolder">{this.props.userName}</span>
        <span className="credit-tagline">{this.props.tagLine}</span>
        <span className="credit-role">{this.props.creditRole}</span>
        <span className="credit-links">
          <PlatformLinkList data={this.props.socialMedia} />
        </span>
      </li>
    );
  }
}
