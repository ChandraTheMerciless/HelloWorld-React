class HelloWorld extends React.Component{
    render() {
        return <p>Hello {this.props.planet}!</p>;
    }
}

ReactDOM.render(
    <HelloWorld planet="World" />,
    document.getElementById('hello-earth-container')
);

ReactDOM.render(
<HelloWorld planet="Mars" />,
    document.getElementById('hello-mars-container')
);

ReactDOM.render(
<HelloWorld planet="David Bowie" />,
    document.getElementById('hello-bowie-container')
);