import React from "react";

//https://blog.abelotech.com/posts/number-currency-formatting-javascript/
function formatNumber(num) {
  if (num === undefined || num === null) return 0;

  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function getXPAmnt(level, growth) {
  return Math.round(level * 50 * (level * growth));
}

export default class LeaderboardEntry extends React.Component {
  render() {
    return (
      <li
        className={
          this.props.isMoney
            ? "leaderboard-box money flexList-box"
            : "leaderboard-box flexList-box"
        }
        data={this.props.data.username}
        id={this.props.data.username}
      >
        <div className="leaderboard-position bolder">
          #{formatNumber(this.props.position)}
        </div>

        <div className="leaderboard-avatar">
          <img
            src={(this.props.data.avatar ?? "").replace("gif", "png")}
            alt="Member Avatar"
          />
        </div>
        <span
          className={
            this.props.isMoney
              ? "leaderboard-name money bolder"
              : "leaderboard-name bolder"
          }
        >
          {this.props.data.username}
        </span>
        {this.props.isMoney ? (
          <span className="leaderboard-money bolder">
            ₩{formatNumber(this.props.data.money)}
          </span>
        ) : (
          <div className="leaderboard-bottom">
            <div className="leaderboard-xp-bar">
              <progress
                className="leaderboard-fillbar"
                value={this.props.data.xp}
                max={getXPAmnt(parseInt(this.props.data.level) + 1, 1.618)}
              ></progress>
            </div>
            <div className="leaderboard-xp-current bolder">
              {formatNumber(this.props.data.xp)}
            </div>
            <div className="leaderboard-xp-level bolder">
              Level: {formatNumber(this.props.data.level)}
            </div>
            <div className="leaderboard-xp-next bolder">
              {formatNumber(
                getXPAmnt(parseInt(this.props.data.level) + 1, 1.618)
              )}
            </div>
          </div>
        )}
      </li>
    );
  }
}
