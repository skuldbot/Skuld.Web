import React from "react";
import FlexItem from "../components/FlexLists/FlexItem";
import LandingInfo from "../components/LandingBox";
import Slogans from "../data/slogans.json";

function getSlogan() {
  var sumOfWeights = 0;

  for (var entry in Slogans) {
    sumOfWeights += Slogans[entry].weight;
  }

  var randomWeight = Math.floor(Math.random() * (sumOfWeights + 1));

  for (var slogan in Slogans) {
    randomWeight -= Slogans[slogan].weight;

    if (randomWeight <= 0) return Slogans[slogan].value;
  }

  return "";
}

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <LandingInfo
          Name="Skuld"
          Slogan={getSlogan()}
          Image="/img/Skuld.png"
          alt="Skuld Discord Bot Avatar"
        />
        <div className="landing-content">
          <ul className="flexList">
            <FlexItem
              flexName="Gamification"
              flexDesc="Skuld helps make your servers more gamelike and help increase user interaction."
              flexClass="fas fa-gamepad"
            />
            <FlexItem
              flexName="Fun"
              flexDesc="Skuld makes your servers more fun with actions you can perform on a person."
              flexClass="fas fa-laptop"
            />
            <FlexItem
              flexName="Moderation"
              flexDesc="Skuld helps you moderate your server."
              flexClass="fas fa-users-cog"
            />
            <FlexItem
              flexName="Search"
              flexDesc="Skuld can search Google, Youtube &amp; Imgur from within your Discord Server."
              flexClass="fas fa-search"
            />
            <FlexItem
              flexName="Comics"
              flexDesc="Skuld can get comic strips from a few select web comic artists."
              flexClass="fas fa-book-open"
            />
            <FlexItem
              flexName="Anime &amp; Manga"
              flexDesc="Skuld can search for all of your weeby needs."
              flexClass="fas fa-tv"
            />
          </ul>
        </div>
      </div>
    );
  }
}
