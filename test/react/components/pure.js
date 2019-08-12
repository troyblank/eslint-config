import React, { PureComponent } from 'react';

export default class Pure extends PureComponent {
    helloText = 'hello world';
    somethignElse = {};

    componentDidMount() {
        this.sayHello();
    }

    sayHello() {
        return this.helloText;
    }

    render() {
        return (
          <div />
        );
    }
}
