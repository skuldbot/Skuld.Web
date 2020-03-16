import React from "react";
import ParameterNode from "./ParameterNode";

export default class CommandNode extends React.Component {
  render() {
    return (
      <div
        className="command unhoisted"
        data={this.props.data.Name}
        id={this.props.data.Name}
      >
        <span className="command-name">
          <div>{"sk!" + this.props.data.Name}</div>
        </span>
        <ParameterNode
          command={this.props.data.Name}
          data={this.props.data.Parameters}
        />
        <span className="command-desc">
          <div>{this.props.data.Description}</div>
        </span>
      </div>
    );
  }
}
