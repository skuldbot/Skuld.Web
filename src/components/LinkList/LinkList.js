import React from 'react';
import { Link } from 'react-router-dom';

export default class LinkList extends React.Component {
    render () {
        {this.props.data.map((entry, i) => {
            return <Link key={i} href={entry.link}><i className={entry.icon} /></Link>;
        })}
    }
}