var React = require('react');

require('./css/add-item.css');

// Create add item component
var AddItem = React.createClass({
  render: function () {
    return (
      <form id='add-todo' onSubmit={this.handleSubmit}>
        <input type='text' required ref='newItem'/>
        <input type='submit' value='Add' />
      </form>
    );
  },

  // Custom functions
  handleSubmit: function (e) {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
    this.refs.newItem.value = "";
  }
});

// 'ref' in the input,
// gives me the avility to reference to this data
// in react outside the form.


module.exports = AddItem;
