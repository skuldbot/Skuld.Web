import React from 'react';

function getFontAwesomeFromPlatform(platform)
{
    switch(platform)
    {
        case 'Mixer':
            return "fas fa-satellite-dish";
        case 'Twitch':
            return "fab fa-twitch";
        case 'Twitter':
            return "fab fa-twitter";
        case 'Youtube':
            return "fab fa-youtube";
        case 'Facebook':
            return "fab fa-facebook-f";
        case 'Github':
            return "fab fa-github";
        case 'Newgrounds':
            return "fas fa-video";
        case 'Instagram':
            return "fab fa-instagram";
        default:
            return "fas fa-link";
    }
}

export default class PlatformLinkList extends React.Component {
    render () {
        var links = this.props.data.map((entry, i) => {
            return <a key={i} href={entry.URL}><i className={getFontAwesomeFromPlatform(entry.Platform)} /></a>;
        });

        return links;
    }
}