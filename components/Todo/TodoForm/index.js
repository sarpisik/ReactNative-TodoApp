import React from 'react'
// import Button from '../../Button'
import { Button, InputField, withForm } from '../../index'
// import InputField from '../../InputField'
import { styles } from '../../../themes'

const INITIAL_STATE = {
  todo: '',
  error: null
}

const error = {
  message: "Input field can't be empty"
}

const TodoForm = ({ todo, onChange, addTodo, ...props }) => {
  const onSubmit = () => {
    todo === ''
      ? onChange({ error })
      : (addTodo(todo), props.onSubmit(), props.navigate())
  }
  return (
    <>
      <InputField
        inputContainerStyle={styles.inputContainer}
        icon="new-message"
        inputStyle={styles.inputStyle}
        autoFocus={true}
        errorStyle={styles.errorInputStyle}
        placeholder="Type"
        returnKeyType="go"
        errorMessage={props.error && props.error.message}
        onChangeText={todo => onChange({ todo })}
        onSubmitEditing={() => onSubmit()}
        value={todo}
        shake={true}
      />

      <Button
        buttonStyle={styles.button}
        onPress={() => onSubmit()}
        title="Add Todo"
      />
    </>
  )
}

export default withForm(INITIAL_STATE)(TodoForm)
