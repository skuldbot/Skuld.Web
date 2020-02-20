import React from 'react'
import CommandNode from "./CommandNode"

export default class ModuleTree extends React.Component {
    render() {
        let commands = this.props.data.Commands.map((value, key) => <CommandNode key={key} data={value} />);
        return (
            <div className="module">
                <h4>{this.props.data.Name}</h4>
                {commands}
            </div>
        );
    }
}