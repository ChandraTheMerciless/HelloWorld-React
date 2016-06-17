'use strict';

var HelloWorld = React.createClass({displayName: 'CommentBox',
    render: function() {
        return (
            React.createElement('div', {className: "commentBox"},
                "Hello World!"
            )
        );
    }
});
ReactDOM.render(
    React.createElement(HelloWorld, null),
    document.getElementById('hello-earth-container')
);
