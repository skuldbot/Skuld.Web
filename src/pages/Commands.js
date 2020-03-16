import React from "react";
import Fuse from "fuse.js";
import cmds from "../data/commands";
import CommandNode from "../components/Commands/CommandNode";
import SearchFlavour from "../data/commandSearchFlavour";

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getFlavour() {
  shuffle(SearchFlavour);

  var sumOfWeights = 0;

  for (var entry in SearchFlavour) {
    sumOfWeights += SearchFlavour[entry].weight;
  }

  var randomWeight = Math.floor(Math.random() * (sumOfWeights + 1));

  for (var slogan in SearchFlavour) {
    randomWeight -= SearchFlavour[slogan].weight;

    if (randomWeight <= 0) return SearchFlavour[slogan].value;
  }

  return "";
}

function unHoist(doFirstHoist) {
  if (doFirstHoist) {
    var firstHoisted = document.getElementsByClassName("firstHoist");
    if (firstHoisted.length > 0) {
      Array.from(firstHoisted).forEach((val, index) => {
        val.classList.remove("firstHoist");
      });
    }
  }

  var hoisted = document.getElementsByClassName("hoisted");
  if (hoisted.length > 0) {
    Array.from(hoisted).forEach((val, index) => {
      val.classList.remove("hoisted");
      if (!val.classList.contains("unhoisted")) {
        val.classList.add("unhoisted");
      }
      if (val.classList.contains("firstHoist")) {
        val.classList.remove("firstHoist");
      }
    });
  }
}

export default class Commands extends React.Component {
  constructor(props) {
    super(props);

    cmds.sort((a, b) => {
      let textA = a.Name.toUpperCase();
      let textB = b.Name.toUpperCase();

      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

    this.state = {
      commands: [],
      allcommandnames: []
    };
  }

  componentDidMount() {
    const commands = document.getElementById("commands");

    for (let i = 0; i < commands.childElementCount; i++) {
      const cmd = commands.children.item(i);

      if (cmd !== undefined) {
        const attr = cmd.getAttribute("data");

        if (attr === null) continue;

        var cmds = this.state.commands;
        var allcmds = this.state.allcommandnames;

        cmds[cmds.length] = {
          command: attr
        };

        allcmds[allcmds.length] = {
          command: attr
        };

        this.setState({ commands: cmds, allcommandnames: allcmds });
      }
    }
  }

  handleSearch(input) {
    const commands = document.getElementById("commands");

    const fuse = new Fuse(this.state.commands, {
      shouldSort: true,
      threshold: 0.8,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["command"],
      id: "command"
    });
    let results = fuse.search(input);

    if (input.length === 0 || input === "") {
      results = this.state.allcommandnames;
    }

    unHoist(true);

    for (let i = 0; i < commands.childElementCount; i++) {
      const cmd = commands.children.item(i);

      if (cmd.id === results[0]) {
        commands.insertBefore(cmd, commands.children.item(0));
        if (!cmd.classList.contains("hoisted")) {
          cmd.classList.add("hoisted");
          cmd.classList.remove("unhoisted");
          cmd.classList.remove("firstHoist");
        }
        if (cmd.classList.contains("unhoisted")) {
          cmd.classList.remove("unhoisted");
        }
      }
    }

    var notHosited = document.getElementsByClassName("unhoisted");

    var firstUnHoisted = notHosited.item(0);

    if (firstUnHoisted.classList.contains("unhoisted")) {
      firstUnHoisted.classList.add("firstHoist");
    }

    if (input === "") {
      unHoist(true);
    }
  }

  render() {
    let commands = cmds.map((val, index) =>
      val.Commands.map((value, key) => <CommandNode key={key} data={value} />)
    );

    return (
      <div id="content">
        <div className="searchBox">
          <input
            placeholder={"Find " + getFlavour() + "..."}
            type="text"
            onChange={e => this.handleSearch(e.target.value)}
          />
        </div>
        <div className="legend right">
          <span>Legend:</span>
          <div className="legend-box optional">Optional Parameter</div>
          <div className="legend-box required">Required Parameter</div>
        </div>
        <div id="commands">{commands}</div>
      </div>
    );
  }
}
