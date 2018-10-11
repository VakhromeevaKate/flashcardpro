import React, { PureComponent } from 'react';

export default class Card extends PureComponent {
    constructor() {
        super();
        this.state = { reveal: false };
    }

    render() {
        const { prompt, answer } = this.props.card;
        return (
            <div className='card' onClick={() => this.setState({ reveal: true })}>
                <div className='card-propmt'><h4>{ prompt }</h4></div>
                <div className={ this.state.reveal ? 'card-answer': 'text-hidden'}><h4>{ answer }</h4></div>
            </div>
        );
    }
}