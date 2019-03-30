import React from 'react'
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native'
import { Entypo } from '@expo/vector-icons'
import ACTIONS from '../../../constants'
import { withForm } from '../../index'
import { styles } from '../../../themes'

const INITIAL_STATE = {
  text: '',
  error: null
}

const AddTodo = ({ text, onChange, addEntry, theme, id, onSubmit }) => (
  <KeyboardAvoidingView
    // Offset value must be equal to header component height value
    keyboardVerticalOffset={75}
    behavior="padding">
    <Wrapper theme={theme}>
      <TextInput
        value={text}
        style={[styles.input, styles.rowText, { color: theme.tertiary }]}
        textAlignVertical="top"
        underlineColorAndroid="transparent"
        placeholder={`New ${id ? 'Todo' : 'Category'}...`}
        placeholderTextColor={theme.tertiary}
        onChangeText={text => onChange({ text })}
        onSubmitEditing={() =>
          text !== '' && handleSubmit(text, id, addEntry, onSubmit)
        }
        blurOnSubmit={false}
      />
      {text === '' || <ClearIcon resetText={onSubmit} color={theme.tertiary} />}
    </Wrapper>
  </KeyboardAvoidingView>
)
// Form HOC
export default withForm(INITIAL_STATE)(AddTodo)

// Sub Components
// Container
function Wrapper({ theme, children }) {
  const style = {
    ...styles.inputKeyboardContainer,
    backgroundColor: theme.secondary,
    borderBottomColor: theme.primary
  }
  return <View style={style}>{children}</View>
}
// Icon
function ClearIcon({ resetText, color }) {
  return (
    <TouchableOpacity onPress={() => resetText()}>
      <Entypo style={styles.icon} name="cross" size={30} color={color} />
    </TouchableOpacity>
  )
}

// Method
// Create & Dispatch Todo
function handleSubmit(text, id, sendTodo, clearInput) {
  // If this is a new todo action, create a new todo.
  // Else, create a new category.
  if (id) {
    sendTodo({
      text,
      titleId: id,
      type: ACTIONS.TODO_ADD
    })
  } else {
    const time = new Date()
    let newCategory = {
      title: text,
      id: time.getTime(),
      createdAt: time.toUTCString(),
      lastModified: time.getTime(),
      isToggle: false,
      selectedTodos: [],
      todos: []
    }
    sendTodo({
      newCategory,
      type: ACTIONS.CATEGORY_ADD
    })
  }
  clearInput()
}
