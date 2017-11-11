var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');

// module requires
//   ./  ->  goes to the same directory we are in
var TodoItem = require('./todo-item');
var AddItem = require('./add-item');

// Create component
var TodoComponent = React.createClass({
  getInitialState: function () { //difine the stats of the component
    return {
      todos: ['Wash up', 'Eat some cheese', 'take a nap', 'buy flowers']
    };
  },

  render: function () {
    // local version of my data:
    var myTodos = this.state.todos;
    myTodos = myTodos.map(function (item, index) {
      return (
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    }.bind(this));
    return(
      <div id='todo-list'>
        <p>The busiest people ever...</p>
        <ul>
          {myTodos}
        </ul>
        <AddItem onAdd={this.onAdd}/>
      </div>

    );
  },


  // Custom functions
  onDelete: function (item) {
      var updatedTodos = this.state.todos.filter(function (val, index) {
        // goes through all the elements in the array
        // true keep the element in the array
        // false, delete the element from the array
        return item !== val;
      });
      this.setState ({
        todos: updatedTodos
      });
  },

  onAdd: function (item) {
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({todos: updatedTodos});
  }

});



// put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));
