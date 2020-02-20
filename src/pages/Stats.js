import React from 'react';
import FlexItem from '../components/FlexLists/FlexItem'

export default class Stats extends React.Component {
    render() {
        return (
            <div className="stats">
                <ul className="flexList">
                    <FlexItem flexName="Version" flexDesc="N/A" flexClass="fas fa-code-branch" />
                    <FlexItem flexName="Guilds" flexDesc={0} flexClass="fas fa-server" />
                    <FlexItem flexName="Users" flexDesc={0} flexClass="fas fa-users" />
                    <FlexItem flexName="RAM Usage" flexDesc={0} flexClass="fas fa-memory" />
                    <FlexItem flexName="Uptime" flexDesc={0} flexClass="fas fa-clock" />
                    <FlexItem flexName="Latency" flexDesc={0+"ms"} flexClass="fas fa-signal" />
                    <li className="flexList-box">
                        <a href="https://botsfordiscord.com/bots/270047199184945152"><img src="https://botsfordiscord.com/api/bot/270047199184945152/widget" /></a>
                    </li>
                    <li className="flexList-box">
                        <a href="https://discordbots.org/bot/270047199184945152"><img src="https://discordbots.org/api/widget/270047199184945152.svg" /></a>
                    </li>
                </ul>
          </div>
        );
    }
}