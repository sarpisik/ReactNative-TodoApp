import React from 'react'
import { View, TextInput, KeyboardAvoidingView } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import ACTIONS from '../../../constants'
import { withForm } from '../../index'
import { styles } from '../../../themes'

const INITIAL_STATE = {
  text: '',
  error: null
}

const AddTodo = ({ text, onChange, addEntry, theme, id, ...props }) => {
  const onSubmit = () => {
    const data = id
      ? {
          text,
          titleId: id,
          type: ACTIONS.TODO_ADD
        }
      : {
          text,
          type: ACTIONS.CATEGORY_ADD
        }
    text === '' || (addEntry(data), props.onSubmit())
  }

  return props.isActive ? (
    <KeyboardAvoidingView
      // Offset value must be equal to header component height value
      keyboardVerticalOffset={75}
      behavior="padding">
      <View
        style={[
          styles.inputKeyboardContainer,
          { backgroundColor: theme.primary }
        ]}>
        {/* SEND BUTTON */}
        <Entypo name="paper-plane" size={25} color={theme.tertiary} />

        <TextInput
          value={text}
          style={[styles.input, { color: theme.tertiary }]}
          autoFocus={true}
          textAlignVertical="top"
          underlineColorAndroid="transparent"
          placeholder="Add Todo"
          placeholderTextColor={theme.tertiary}
          onChangeText={text => onChange({ text })}
          onSubmitEditing={() => onSubmit()}
          onBlur={() => props.onBlur()}
          blurOnSubmit={true}
        />
      </View>
    </KeyboardAvoidingView>
  ) : null
}

export default withForm(INITIAL_STATE)(AddTodo)
