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

  let toggleCozy = function () {
    var toggle = document.getElementById("cozy-toggle");
    setCompact(toggle.checked);
    if (toggle.checked) {
      var box = document.getElementsByClassName("leaderboard-box");
      for (var item in box.length) {
        if (box[item] !== undefined && !box[item].classList.contains("cozy")) {
          box[item].classList.add("cozy");
        }
      }
      var avs = document.getElementsByClassName("leaderboard-avatar");
      for (var itm in avs.length) {
        if (avs[itm] !== undefined && !avs[itm].classList.contains("cozy")) {
          avs[itm].classList.add("cozy");
        }
      }
      var names = document.getElementsByClassName("leaderboard-name");
      for (var itmm in names.length) {
        if (
          names[itmm] !== undefined &&
          !names[itmm].classList.contains("cozy")
        ) {
          names[itmm].classList.add("cozy");
        }
      }
    } else {
      var compacts = document.getElementsByClassName("cozy");

      for (var itmmm in compacts.length) {
        if (
          compacts[itmmm] !== undefined &&
          compacts[itmmm].classList.contains("cozy")
        ) {
          compacts[itmmm].classList.remove("cozy");
        }
      }
    }
  };

  return (
    <div id="content">
      <div className="cozy-toggle">
        <div>Cozy</div>
        <Toggle
          id="cozy-toggle"
          defaultChecked={false}
          onClick={toggleCozy}
          name="Cozy"
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
                isCompact={!compact}
              />
            );
          } else {
            return (
              <LeaderboardEntry
                key={key}
                data={userentry}
                position={key + 1}
                isMoney={isMoney}
                isCompact={!compact}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
