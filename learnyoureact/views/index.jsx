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
  getInitialState: function () {
    return {
      data: this.props.data,
      titleValue: '',
      detailValue: ''
    }
  },
  updateNewTodo: function (title, detail) {
    this.setState({
      data: this.state.data,
      titleValue: title,
      detailValue: detail
    })
  },
  changeTitle: function (e) {
    this.updateNewTodo(e.target.value, this.state.detailValue)
  },
  changeDetail: function (e) {
    this.updateNewTodo(this.state.titleValue, e.target.value)
  },
  addTodo: function () {
    this.state.data.push({
      title: this.state.titleValue,
      detail: this.state.detailValue
    })
    this.updateNewTodo(this.state.titleValue, this.state.detailValue)
  },
  render: function () {
    var todo = this.props.data.map(function (x) {
      return <Todo title={x.title} key={x.title}>{x.detail}</Todo>
    })

    return (
      <div className="todoList">
        <div>
          Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} />
          Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} />
          <button onClick={this.addTodo}>Add</button>
        </div>
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
