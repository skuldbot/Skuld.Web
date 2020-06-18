import React from "react";

//https://blog.abelotech.com/posts/number-currency-formatting-javascript/
function formatNumber(num) {
  if (num === undefined || num === null) return 0;

  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

//https://stackoverflow.com/a/11410079
function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

function getXPAmnt(level, growth) {
  return Math.round(clamp(Math.pow(level, growth) * 50, 0, 1500000));
}

function getStackedXPAmnt(level, growth) {
  var lvl = 0;
  var xp = 0;
  while (lvl < level) {
    xp += getXPAmnt(lvl, growth);
    lvl += 1;
  }
  return xp;
}

export default class LeaderboardEntry extends React.Component {
  render() {
    var xpCurrentLevel = getStackedXPAmnt(this.props.data.Level, 2.5);
    var xpNextLevel = getXPAmnt(this.props.data.Level + 1, 2.5);

    var currXp = this.props.data.TotalXP - xpCurrentLevel;

    return (
      <li
        className={
          this.props.isMoney
            ? "leaderboard-box" +
              (this.props.isCompact ? "" : " cozy") +
              " money flexList-box"
            : "leaderboard-box" +
              (this.props.isCompact ? "" : " cozy") +
              " flexList-box"
        }
        data={this.props.data.Username}
        id={this.props.data.Username}
      >
        <div className="leaderboard-position bolder">
          <p class="smaller-text">#</p>
          {formatNumber(this.props.position)}
        </div>

        <div
          className={
            "leaderboard-avatar" + (this.props.isCompact ? "" : " cozy")
          }
        >
          <img
            src={(this.props.data.Avatar ?? "").replace("gif", "png")}
            alt="Member Avatar"
          />
        </div>
        <span
          className={
            this.props.isMoney
              ? "leaderboard-name" +
                (this.props.isCompact ? "" : " cozy") +
                " money bolder"
              : "leaderboard-name" +
                (this.props.isCompact ? "" : " cozy") +
                " bolder"
          }
        >
          {this.props.data.Username}
        </span>
        {this.props.isMoney ? (
          <span className="leaderboard-money bolder">
            ₩{formatNumber(this.props.data.Money)}
          </span>
        ) : (
          <div className="leaderboard-bottom">
            <div className="leaderboard-xp-bar">
              <progress
                className="leaderboard-fillbar"
                value={currXp}
                max={xpNextLevel}
              ></progress>
            </div>
            <div className="leaderboard-xp-current bolder">
              {formatNumber(currXp)}
            </div>
            <div className="leaderboard-xp-level bolder">
              Level: {formatNumber(this.props.data.Level)}
            </div>
            <div className="leaderboard-xp-next bolder">
              {formatNumber(xpNextLevel)}
            </div>
          </div>
        )}
      </li>
    );
  }
}
