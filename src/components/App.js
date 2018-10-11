import React, { PureComponent } from 'react';
import StackList from './StackList';

export default class App extends PureComponent {
    render(){
        return (
            <div>
                <h2>Flashcard Pro</h2>
                <StackList />
            </div>
        )
    }
}