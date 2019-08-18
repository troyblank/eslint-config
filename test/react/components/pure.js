import React, { PureComponent } from 'react';

export default class Pure extends PureComponent {
    helloText = 'hello world';
    somethignElse = {};

    state = {
        greeting: this.props.greeting
    }

    componentDidMount() {
        this.sayHello();
    }

    sayHello = () => {
        this.setState({ greeting: this.helloText });
    }

    render() {
        const { greeting } = this.state;

        return (
          <x>
            <p>{ greeting }</p>
            <p dangerouslySetInnerHTML={{ __html: greeting }} />
            <p {...greeting} />
            <button onClick={this.sayHello} />
          </x>
        );
    }
}
