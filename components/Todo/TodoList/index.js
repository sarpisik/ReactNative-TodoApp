import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import TodoItem from '../../Todo/TodoItem'

const mapStateToProps = (state, ownProps) => {
  const data =
    ownProps.list === 'titles'
      ? Object.values(state.todosState.todosList)
      : state.todosState.todosList[ownProps.id].todos
  return {
    ...ownProps,
    data: data,
    extraData: state.themeState.theme.tertiary,
    keyExtractor: (item, index) => index.toString(),
    renderItem: ({ item }) => (
      <TodoItem
        color={state.themeState.theme.tertiary}
        id={item.id}
        isToggle={item.isToggle}
        title={item.title || item.text}
        item={ownProps.list}
        titleId={ownProps.id && ownProps.id}
      />
    )
  }
}

export default connect(mapStateToProps)(FlatList)
