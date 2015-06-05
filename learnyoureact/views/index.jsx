var React = require('react')

var TodoBox = React.createClass({
  render: function () {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data={this.props.data} />
        <TodoForm />
      </div>
    )
  }
})

var TodoList = React.createClass({
  render: function () {
    var todo = this.props.data.map(function (x) {
      return <Todo title={x.title} key={x.title}>{x.detail}</Todo>
    })

    return (
      <div className="todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    )
  }
})

var Todo = React.createClass({
  getInitialState: function () {
    return { checked: false }
  },
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  handleChange: function (e) {
    this.setState({ checked: !this.state.checked })
  },
  render: function () {
    return (
      <tr style={this.state.checked ? style.checkedTodo : style.notCheckedTodo}>
        <td style={style.tableContent}>
          <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
        </td>
        <td style={style.tableContent}>{this.props.title}</td>
        <td style={style.tableContent}>{this.props.children}</td>
      </tr>
    )
  }
})

var TodoForm = React.createClass({
  render: function () {
    return (
      <div className="todoForm">
        I am a TodoForm.
      </div>
    )
  }
})

var style = {
  checkedTodo: {
    textDecoration: 'line-through'
  },
  notCheckedTodo: {
    textDecoration: 'none'
  },
  tableContent: {
    border: "1px solid black"
  }
}

module.exports = TodoBox
