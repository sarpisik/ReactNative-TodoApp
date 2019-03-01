import React from 'react'
import Button from '../../Button'
import withForm from '../../HOCs/withForm'
import InputField from '../../InputField'
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
        errorMessage={props.error && props.error.message}
        onChangeText={todo => onChange({ todo })}
        onSubmitEditing={() => onSubmit()}
        value={todo}
        shake={true}
      />

      <Button buttonStyle={styles.button} title="Add Todo" />
    </>
  )
}

export default withForm(INITIAL_STATE)(TodoForm)
