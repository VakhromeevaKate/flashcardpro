import React, { PureComponent } from 'react';

export default class Card extends PureComponent {
    constructor() {
        super();
        this.state = { reveal: false };
    }

    render() {
        const { prompt, answer } = this.props.card;
        const reveal = this.state.reveal;
        console.log(reveal);
        return (
            <div className='card' onClick={() => this.setState({ reveal: !reveal })}>
                <div className={ this.state.reveal ? 'card-prompt' : 'without-answer'}><h4>{ prompt }</h4></div>
                <div className={ this.state.reveal ? 'card-answer' : 'text-hidden'}><h4>{ answer }</h4></div>
            </div>
        );
    }
}
