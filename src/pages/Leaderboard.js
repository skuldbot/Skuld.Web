import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import getLeaderboard from "../utilities/getLeaderboard";
import LeaderboardEntry from "../components/LeaderboardEntry";
import Toggle from "react-toggle";
import "react-toggle/style.css";

export default function Leaderboard(props) {
  const doMoneyCheck = function doMoneyCheck(props) {
    if (props.match.params.guildId !== undefined) {
      if (props.match.params.leaderboardType === "experience") {
        return false;
      } else if (props.match.params.leaderboardType === "money") {
        return true;
      }
    } else {
      if (props.match.params.leaderboardType === "experience") {
        return false;
      } else if (props.match.params.leaderboardType === "money") {
        return true;
      }
    }
  };

  const [isMoney] = useState(doMoneyCheck(props));
  const [canLoadMore, setCanLoadMore] = useState(true);
  const [compact, setCompact] = useState(false);

  const { entries, nextOffset, hasMore, loading, setURL } = getLeaderboard(
    props
  );

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      let observable = ReactDOM.findDOMNode(node);
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((observers) => {
        if (observers[0].isIntersecting && hasMore) {
          setCanLoadMore(true);
        }
      });
      if (observable) observer.current.observe(observable);
    },
    [loading, hasMore, setCanLoadMore]
  );

  useEffect(() => {
    if (canLoadMore) {
      if (props.match.params.guildId !== undefined) {
        if (props.match.params.leaderboardType === "experience") {
          setURL(
            "https://api.skuldbot.uk/experience/" +
              props.match.params.guildId +
              "/" +
              nextOffset
          );
        } else if (props.match.params.leaderboardType === "money") {
          setURL(
            "https://api.skuldbot.uk/money/" +
              props.match.params.guildId +
              "/" +
              nextOffset
          );
        }
      } else {
        if (props.match.params.leaderboardType === "experience") {
          setURL("https://api.skuldbot.uk/experience/0/" + nextOffset);
        } else if (props.match.params.leaderboardType === "money") {
          setURL("https://api.skuldbot.uk/money/0/" + nextOffset);
        }
      }
    }
    setCanLoadMore(false);
  }, [props, canLoadMore, setURL, setCanLoadMore, nextOffset]);

  let toggleCompact = function () {
    var toggle = document.getElementById("compact-toggle");
    setCompact(toggle.checked);
    if (toggle.checked) {
      var box = document.getElementsByClassName("leaderboard-box");
      for (var item in box.length) {
        if (
          box[item] !== undefined &&
          !box[item].classList.contains("compact")
        ) {
          box[item].classList.add("compact");
        }
      }
      var avs = document.getElementsByClassName("leaderboard-avatar");
      for (var item in avs.length) {
        if (
          avs[item] !== undefined &&
          !avs[item].classList.contains("compact")
        ) {
          avs[item].classList.add("compact");
        }
      }
      var names = document.getElementsByClassName("leaderboard-name");
      for (var item in names.length) {
        if (
          names[item] !== undefined &&
          !names[item].classList.contains("compact")
        ) {
          names[item].classList.add("compact");
        }
      }
    } else {
      var compacts = document.getElementsByClassName("compact");

      for (var item in compacts.length) {
        if (
          compacts[item] !== undefined &&
          compacts[item].classList.contains("compact")
        ) {
          compacts[item].classList.remove("compact");
        }
      }
    }
  };

  return (
    <div id="content">
      <div className="compact-toggle">
        <div>Compact</div>
        <Toggle
          id="compact-toggle"
          defaultChecked={false}
          onClick={toggleCompact}
          name="Compact"
        />
      </div>
      <div id="leaderboard" className="flexList">
        {entries.map((userentry, key) => {
          if (entries.length === key + 1) {
            return (
              <LeaderboardEntry
                ref={lastElementRef}
                key={key}
                data={userentry}
                position={key + 1}
                isMoney={isMoney}
                isCompact={compact}
              />
            );
          } else {
            return (
              <LeaderboardEntry
                key={key}
                data={userentry}
                position={key + 1}
                isMoney={isMoney}
                isCompact={compact}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
