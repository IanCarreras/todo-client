import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from './actions'

import './App.css'
import Todo from './components/todo'

class App extends Component {

  componentWillMount(){
    const { actions } = this.props
    actions.getTodos()
  }

  render() {
    console.log(this.props.todos[1])
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo App</h1>
          <Todo title={this.props.todos.title} />
        </header>
      </div>
    )
  }
}

const mapStateToProps = ({ todos }) => {
  return {
    todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
