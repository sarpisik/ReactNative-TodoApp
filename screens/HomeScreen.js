import React from 'react'

import { withHeader, withTheme, TodoList } from '../components'

const TODOS = [
  {
    id: 0,
    isDone: false,
    title: 'todo 1'
  },
  {
    id: 1,
    isDone: false,
    title: 'todo 2'
  },
  {
    id: 2,
    isDone: false,
    title: 'todo 3'
  }
]

class HomeScreen extends React.Component {
  changeHandler = type => this.props.changeTheme(type)

  render() {
    return <TodoList data={TODOS} />
  }
}

const HeaderHomeScreen = withHeader({ title: 'Home' })(HomeScreen)

export default withTheme(HeaderHomeScreen)
