import React from "react";
import ReactToolTip from "react-tooltip";

function getParameterBox(key, parameter, toolTipKey) {
  if (parameter.Name === "none") {
    return (
      <div
        key={key}
        className="param-tooltip none"
        data-tip
        data-for={toolTipKey}
      >
        {parameter.Name}
        {parameter.Description !== undefined ? (
          <ReactToolTip id={toolTipKey} aria-haspopup="true">
            {parameter.Description}
          </ReactToolTip>
        ) : (
          ""
        )}
      </div>
    );
  } else {
    if (parameter.Optional) {
      return (
        <div
          key={key}
          className="param-tooltip optional"
          data-tip
          data-for={toolTipKey}
        >
          {parameter.Name}
          {parameter.Description !== undefined ? (
            <ReactToolTip id={toolTipKey} aria-haspopup="true">
              {parameter.Description}
            </ReactToolTip>
          ) : (
            ""
          )}
        </div>
      );
    } else {
      return (
        <div
          key={key}
          className="param-tooltip required"
          data-tip
          data-for={toolTipKey}
        >
          {parameter.Name}
          {parameter.Description !== undefined ? (
            <ReactToolTip id={toolTipKey} aria-haspopup="true">
              {parameter.Description}
            </ReactToolTip>
          ) : (
            ""
          )}
        </div>
      );
    }
  }
}

function getParameters(cmd, parameters) {
  if (parameters != null && parameters.length > 0) {
    let params = [];

    if (
      parameters.every((val, key) => {
        return val.Optional;
      })
    ) {
      params.push(
        <div key="0" className="soleRowParameter">
          {getParameterBox(
            0,
            {
              Name: "none",
              Description: "Leave empty"
            },
            cmd + "-none-tt"
          )}
        </div>
      );

      params.push(
        <div key="1" className="parameterRow">
          <div className="splitterRow">
            <div className="splitterLine"></div>
            <span className="splitterText">OR</span>
          </div>
        </div>
      );
    }

    params.push(
      <div key="2" className="parameterRow">
        {parameters.map((val, index) => {
          return getParameterBox(index, val, cmd + "-" + val.Name + "-tt");
        })}
      </div>
    );

    return params;
  } else {
    return (
      <div key="0" className="soleRowParameter">
        {getParameterBox(
          0,
          {
            Name: "none",
            Description: "Leave empty"
          },
          cmd + "-none-tt"
        )}
      </div>
    );
  }
}

export default class ParameterNode extends React.Component {
  render() {
    return (
      <span className="command-parameters">
        {getParameters(this.props.command, this.props.data)}
      </span>
    );
  }
}
