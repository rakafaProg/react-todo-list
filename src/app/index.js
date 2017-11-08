var React = require('react');
var ReactDOM = require('react-dom');

// Create component
var TodoComponent = React.createClass({
  render: function () {
    return(
      <div>
        <h1>Hello!!</h1>
        <h2>Second Line</h2>
      </div>
    );
  }
});

// put component into html page

ReactDOM.render(<TodoComponent />, document.getElementById('todo-container'));
