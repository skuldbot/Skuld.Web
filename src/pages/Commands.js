import React from 'react';
import FuzzySearch from 'react-fuzzy'
import cmds from "../data/commands"
import ModuleTree from "../components/Commands/ModuleTree"

function getCommandNames()
{
    let names = [];
    cmds.map((x, i) => {
        return x.Commands.map((y, j) => {
            let entry = { Name: y.Name };
            if (names.filter(element => (element.Name == y.Name)).length <= 0)
            {
                names.push(entry);
            }
        })
    });
    return names;
}

function getCommandNamesAndModules()
{
    let names = [];
    cmds.map((x, i) => {
        return x.Commands.map((y, j) => {
            let entry = { Command: y.Name, Module: x.Name };
            if (names.filter(element => (element.Command == y.Name)).length <= 0)
            {
                names.push(entry);
            }
        })
    });
    return names;
}

export default class Commands extends React.Component {
    constructor(props) {
        super(props);

        cmds.sort((a, b) => {
            let textA = a.Name.toUpperCase();
            let textB = b.Name.toUpperCase();

            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });

        let cmdNames = getCommandNames();
        let cmdModules = getCommandNamesAndModules();

        this.state = { commandNames: cmdNames, commandNameModules: cmdModules }

        console.log(this.state)
    }

    render() {
        let commands = cmds.map((val, index) => (<ModuleTree key={index} data={val} />));
        return (
            <div className="commands">
                {commands}
                <FuzzySearch
                    list={this.state.commandNames}
                    keys={['Name']}
                    onSelect={undefined}
                    placeholder="Find a command..."
                    resultsTemplate={
                        (props, state, styles, clickHandler) => {
                            return state.results.map((val, i) => {
                                const style = state.selectedIndex == i ? styles.selectedResultStyle : styles.resultsStyle;
                                return (
                                    <div
                                        key={i}
                                        style={style}
                                    >
                                        {val.Name} - {this.state.commandNameModules.filter(obj => { return obj.Command == val.Name; })[0].Module}
                                    </div>
                                );
                            });
                        }
                    }
                />
            </div>
        );
    }
}