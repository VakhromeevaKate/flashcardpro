import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Stack extends PureComponent {
    render() {
        return (
            <div>
            <Link to='/'>Home</Link>
                <h3>example</h3>
            </div>
        );
    }
}
