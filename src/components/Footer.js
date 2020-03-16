import React from "react";
export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <hr />
        <div className="footer-content">
          <div className="footer-content-section">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="https://discord.skuldbot.uk/bot?ref=website">Invite</a>
              </li>
              <li>
                <a href="https://discord.skuldbot.uk/support?ref=website">
                  Support
                </a>
              </li>
              <li>
                <a href="//dashboard.skuldbot.uk/">Dashboard</a>
              </li>
              <li>
                <a href="mailto:contact@skuldbot.uk">Get in touch</a>
              </li>
              <li>
                <a href="/legal">Legal</a>
              </li>
              <li>
                <a href="https://twitter.com/SkuldBot">Twitter</a>
              </li>
            </ul>
          </div>
          <div className="footer-content-section">
            <h3>Bot Aggregators</h3>
            <ul>
              <li>
                <a href="https://top.gg/bot/270047199184945152">top.gg</a>
              </li>
              <li>
                <a href="https://discord.bots.gg/bots/270047199184945152">
                  discord.bots.gg
                </a>
              </li>
              <li>
                <a href="https://botsfordiscord.com/bot/270047199184945152">
                  Bots4Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copybar">
          <span className="copy">&copy; 2018-2020 SkuldBot Team</span>
        </div>
      </footer>
    );
  }
}
