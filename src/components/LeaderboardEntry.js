import React from "react";

//https://blog.abelotech.com/posts/number-currency-formatting-javascript/
function formatNumber(num) {
  if (num === undefined || num === null) return 0;

  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function getXPAmnt(level, growth) {
  return Math.round(Math.max(0, min(1500000, pow(level + 1, growth) * 50)));
}

export default class LeaderboardEntry extends React.Component {
  render() {
    return (
      <li
        className={
          this.props.isMoney
            ? "leaderboard-box" +
              (this.props.isCompact ? " compact" : "") +
              " money flexList-box"
            : "leaderboard-box" +
              (this.props.isCompact ? " compact" : "") +
              " flexList-box"
        }
        data={this.props.data.username}
        id={this.props.data.username}
      >
        <div className="leaderboard-position bolder">
          #{formatNumber(this.props.position)}
        </div>

        <div
          className={
            "leaderboard-avatar" + (this.props.isCompact ? " compact" : "")
          }
        >
          <img
            src={(this.props.data.avatar ?? "").replace("gif", "png")}
            alt="Member Avatar"
          />
        </div>
        <span
          className={
            this.props.isMoney
              ? "leaderboard-name" +
                (this.props.isCompact ? " compact" : "") +
                " money bolder"
              : "leaderboard-name" +
                (this.props.isCompact ? " compact" : "") +
                " bolder"
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
                max={getXPAmnt(parseInt(this.props.data.level), 2.5)}
              ></progress>
            </div>
            <div className="leaderboard-xp-current bolder">
              {formatNumber(this.props.data.xp)}
            </div>
            <div className="leaderboard-xp-level bolder">
              Level: {formatNumber(this.props.data.level)}
            </div>
            <div className="leaderboard-xp-next bolder">
              {formatNumber(getXPAmnt(parseInt(this.props.data.level), 2.5))}
            </div>
          </div>
        )}
      </li>
    );
  }
}
