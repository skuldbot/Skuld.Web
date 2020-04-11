import React from "react";
import CreditItem from "./FlexLists/CreditItem";

export default class CreditSection extends React.Component {
  render() {
    if (this.props.data.length > 0) {
      return this.props.data.map((entry, i) => {
        return (
          <CreditItem
            key={i}
            userName={entry.Name}
            tagLine={entry.Tagline}
            creditRole={entry.Role}
            socialMedia={entry.Links}
            src={entry.ImageURL}
          />
        );
      });
    }

    return <br />;
  }
}
