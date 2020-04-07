import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import getLeaderboard from "../utilities/getLeaderboard";
import LeaderboardEntry from "../components/LeaderboardEntry";

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

  return (
    <div id="content">
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
              />
            );
          } else {
            return (
              <LeaderboardEntry
                key={key}
                data={userentry}
                position={key + 1}
                isMoney={isMoney}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
