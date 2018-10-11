import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Stack extends PureComponent {
    render() {
        const { title, cards } = this.props.stack;
        return (
            <div>
            <Link to='/'>Home</Link>
                <h3>{title}</h3>
                <br />
                {
                    cards.map( (card) => {
                        return (
                            <div key={card.id}>
                                <div>{card.prompt}</div>
                                <div>{card.answer}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { stack: state.stack};
}

export default connect(mapStateToProps, null)(Stack);
