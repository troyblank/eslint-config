import React, { PureComponent } from 'react';

export default class Pure extends PureComponent {
    helloText = 'hello world';
    somethignElse = {};

    constructor(props) {
        super(props);

        const { greeting } = this.props;

        this.state = {
            greeting
        };
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
          <React.Fragment>
            <p>{ greeting }</p>
            <p dangerouslySetInnerHTML={{ __html: greeting }} />
            <p {...greeting} />
            <button onClick={this.sayHello} />
          </React.Fragment>
        );
    }
}
