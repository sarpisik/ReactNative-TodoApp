import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import TodoItem from '../TodoItem'

const mapStateToProps = (state, ownProps) => {
  // If this is a list of categories, get title of each.
  // Else, get the todos list of the category.
  const data =
    ownProps.list === 'titles'
      ? Object.values(state.todosState.categoriesList).sort(
          (a, b) => b.lastModified - a.lastModified
        )
      : state.todosState.categoriesList[ownProps.id].todos
  return {
    ...ownProps,
    data: data,
    extraData: state.themeState.theme.tertiary,
    keyExtractor: (item, index) => index.toString(),
    renderItem: ({ item }) => (
      <TodoItem
        colors={state.themeState.theme}
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
