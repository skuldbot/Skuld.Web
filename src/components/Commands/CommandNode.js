import React from 'react'

function getUsage(data)
{
    let cmdBase = "sk!"+data.Name;
    if(data.Parameters.length <= 0)
    {
        return cmdBase
    }
    else
    {
        return cmdBase + " "+data.Parameters.map((v, k) => {
            if(v.Optional) {
                return "<"+v.Name+">";
            } else {
                return "["+v.Name+"]";
            }
        })
    }
}

export default class CommandNode extends React.Component {
    render() {
        console.log(this.props.data);
        return (
            <div className="command">
                <span className="command-name">{this.props.data.Name}</span>
                <span className="command-desc">{this.props.data.Description}</span>
                <span className="command-usage">{getUsage(this.props.data)}</span>
            </div>
        )
    }
}