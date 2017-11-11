var React = require('react');
var ReactDOM = require('react-dom');

// Create component
var TodoComponent = React.createClass({
  getInitialState: function () { //difine the stats of the component
    return {
      todos: ['wash up', 'eat some chees', 'take a nap', 'buy flowers'],
      age: 30
    };
  },
  render: function () {
    // local version of my data:
    var myTodos = this.state.todos;
    myTodos = myTodos.map(function (item, index) {
      return (
        <li>{item}</li>
      );
    });
    return(
      <div>
      <div id='todo-list'>
        <p><strong>The busiest people ever...</strong></p>

        <ul>
          {myTodos}
        </ul>
      </div>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div>
          <code>hard coded data</code>
          <h1>Hello!!</h1>
          <code>data from state</code>
          <h2>{this.state.age}</h2>
          <code>data from property</code>
          <p>{this.props.mssg}</p>
          <code>data from property - object</code>
          <p><strong>Cheese Name: </strong> {this.props.cheese.name}</p>
          <p><strong>Smell Factor: </strong> {this.props.cheese.smellFactore}</p>
          <p><strong>Price: </strong> {this.props.cheese.price} $</p>
        </div>

      </div>
    );
  }
});

// put component into html page
var myCheese = { name: 'Emek', smellFactore: 'good', price: '3.50'};

// <..name of the component..  ..variables:.. ..name = data name = {variable} ect... />
ReactDOM.render(<TodoComponent mssg='I like cheese' cheese={myCheese}/>, document.getElementById('todo-container'));




// inside the render:
/*
var ager = setTimeout(function () { // changing the state of the component
  this.setState({age:35});
}.bind(this), 5 * 1000);
// ^ the this on the function doent point to the right obj, so we need to bind it.
*/
