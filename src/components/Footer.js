import React from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <hr />
                <div className="footer-content footer-left left">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="https://discord.skuldbot.uk/bot?ref=website">Invite</a></li>
                        <li><a href="https://discord.skuldbot.uk/support?ref=website">Support</a></li>
                        <li><a href="//dashboard.skuldbot.uk/">Dashboard</a></li>
                        <li><a href="/legal">Legal</a></li>
                        <li><a href="https://twitter.com/SkuldBot">Twitter</a></li>
                    </ul>
                </div>
                <div className="footer-content footer-left left">
                    <h3>Bot Aggregators</h3>
                    <ul>
                        <li><a href="https://top.gg/bot/270047199184945152">top.gg</a></li>
                        <li><a href="https://discord.bots.gg/bots/270047199184945152">discord.bots.gg</a></li>
                        <li><a href="https://botsfordiscord.com/bot/270047199184945152">Bots4Discord</a></li>
                    </ul>
                </div>
                <div className="footer-content footer-right right">
                    <h3>Contact</h3>
                    <span className="left">If there is anything you need to contact us about, do so with this email <Link to="mailto:contact@skuldbot.uk">contact@skuldbot.uk</Link></span>
                </div>
                <div className="footer-content footer-right right">
                    <h3>Information</h3>
                    <span className="left">Skuld is written in C# &amp; PHP.</span><br />
                    <span className="left">The website is made with React &amp; ❤</span>
                </div>
                <div className="copybar">
                    <span className="copy">&copy; 2018-2020 SkuldBot Team</span>
                </div>
            </footer>
        );
    }
}