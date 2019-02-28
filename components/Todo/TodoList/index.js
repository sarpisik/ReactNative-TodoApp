import React, { PureComponent } from 'react'
import { Text, View, FlatList } from 'react-native'
import TodoItem from '../TodoItem'

export default class TodoList extends PureComponent {
  renderItem = ({ item }) => (
    <TodoItem id={item.id} isDone={item.isDone} title={item.title} />
  )

  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItem}
      />
    )
  }
}
