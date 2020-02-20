import React from 'react';
import LegalBox from '../components/LegalContainer'

export default class Legal extends React.Component {
    render() {
        return (
            <div className="legal">
                <h5 className="center underline">These terms of service are in effect as of April 23 2019</h5>
                <hr />
                <LegalBox IsBot={true} />
                <hr />
                <LegalBox IsBot={false} />
            </div>
        );
    }
}