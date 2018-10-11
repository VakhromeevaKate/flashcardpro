import React, { PureComponent } from 'react';

export default class Card extends PureComponent {
    render() {
        const { prompt, answer } = this.props.card;
        return (
            <div>
                <div><h4>{ prompt }</h4></div>
                <div><h4>{ answer }</h4></div>
            </div>
        );
    }
}