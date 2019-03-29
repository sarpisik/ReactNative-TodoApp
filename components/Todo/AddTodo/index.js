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

const Wrapper = ({ onPress, theme, children, style }) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={[
        styles.inputKeyboardContainer,
        { backgroundColor: theme.primary, ...style }
      ]}>
      {children}
    </View>
  </TouchableOpacity>
)

const INITIAL_STATE = {
  isActive: false,
  text: '',
  error: null
}

const AddTodo = ({ text, onChange, addEntry, theme, id, ...props }) => {
  const onSubmit = () => {
    text === '' ||
      (addEntry({
        text,
        titleId: id,
        type: ACTIONS.TODO_ADD
      }),
      props.onSubmit())
  }

  return props.isActive ? (
    <KeyboardAvoidingView
      // Offset value must be equal to header component height value
      keyboardVerticalOffset={75}
      behavior="padding">
      <Wrapper onPress={() => onChange({ isActive: true })} theme={theme}>
        <TouchableOpacity onPress={() => onChange({ text: '' })}>
          <Entypo
            style={styles.icon}
            name="cross"
            size={30}
            color={theme.tertiary}
          />
        </TouchableOpacity>
        <TextInput
          value={text}
          style={[styles.input, styles.rowText, { color: theme.tertiary }]}
          autoFocus={true}
          textAlignVertical="top"
          underlineColorAndroid="transparent"
          placeholder="Add Todo"
          placeholderTextColor={theme.tertiary}
          onChangeText={text => onChange({ text })}
          onSubmitEditing={() => onSubmit()}
          onBlur={() => onChange({ isActive: false })}
          blurOnSubmit={true}
        />
      </Wrapper>
    </KeyboardAvoidingView>
  ) : (
    <Wrapper
      onPress={() => onChange({ isActive: true })}
      style={{ justifyContent: 'center' }}
      theme={theme}>
      <Entypo
        style={styles.icon}
        name="add-to-list"
        size={30}
        color={theme.tertiary}
      />
    </Wrapper>
  )
}

export default withForm(INITIAL_STATE)(AddTodo)
