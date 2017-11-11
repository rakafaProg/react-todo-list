var React = require('react');
require('./css/todo-item.css');

// nesting components:
// Create todo item component
var TodoItem = React.createClass({
  render: function () {
    return (
      <li>
        <div className='todo-item'>
          <span className='item-name'>{this.props.item} </span>
          <span className='item-remove' onClick={this.handleDelete}> x</span>
        </div>
      </li>
    );
  },

  // Custom functions
  handleDelete: function () {
    this.props.onDelete(this.props.item); // pass the handler to the parent component
  }
});

module.exports = TodoItem;
