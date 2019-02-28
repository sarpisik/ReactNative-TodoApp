import React from 'react'

import { withHeader, withTheme, TodoList } from '../components'

class HomeScreen extends React.Component {
  render() {
    // return null
    return <TodoList />
  }
}

const HeaderHomeScreen = withHeader({ title: 'Home' })(HomeScreen)

export default withTheme(HeaderHomeScreen)
