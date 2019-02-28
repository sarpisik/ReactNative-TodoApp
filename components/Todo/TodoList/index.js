import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import TodoItem from '../../Todo/TodoItem'

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    data: state.todosState.todos,
    extraData: state.themeState.theme.tertiary,
    keyExtractor: (item, index) => index.toString(),
    renderItem: ({ item }) => (
      <TodoItem
        color={state.themeState.theme.tertiary}
        id={item.id}
        isDone={item.isDone}
        title={item.title}
      />
    )
  }
}

export default connect(mapStateToProps)(FlatList)
