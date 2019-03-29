import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import TodoItem from '../../Todo/TodoItem'

const mapStateToProps = (state, ownProps) => {
  // If this is a list of categories, get title of each.
  // Else, get the todos objects of the category.
  const data =
    ownProps.list === 'titles'
      ? Object.values(state.todosState.categoriesList).sort(
          (a, b) => b.lastModified - a.lastModified
        )
      : state.todosState.categoriesList[ownProps.id].todos
  // console.log('================================================== ', data)
  return {
    ...ownProps,
    data: data,
    extraData: state.themeState.theme.tertiary,
    keyExtractor: (item, index) => index.toString(),
    // Render component for each todo item.
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
