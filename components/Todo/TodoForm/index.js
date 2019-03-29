import React from 'react'
import { Button, InputField, withForm } from '../../index'
import { styles } from '../../../themes'

const INITIAL_STATE = {
  title: '',
  error: null
}

const error = {
  message: "Input field can't be empty"
}

const TitleForm = ({ title, onChange, addCategory, ...props }) => {
  const onSubmit = () => {
    if (title === '') {
      onChange({ error })
    } else {
      try {
        const time = new Date()
        const newCategory = {
          title: title,
          id: time.getTime(),
          createdAt: time.toUTCString(),
          lastModified: time.getTime(),
          isToggle: false,
          selectedTodos: [],
          todos: []
        }

        addCategory(newCategory)
        props.onSubmit()
        props.navigate('ShowTodo', {
          title: newCategory.title,
          id: newCategory.id
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <>
      <InputField
        inputContainerStyle={styles.inputContainer}
        icon="new-message"
        inputStyle={{ ...styles.inputStyle, ...styles.rowText }}
        autoFocus={true}
        errorStyle={styles.errorInputStyle}
        placeholder="Category Title..."
        returnKeyType="go"
        errorMessage={props.error && props.error.message}
        onChangeText={title => onChange({ title })}
        onSubmitEditing={() => onSubmit()}
        value={title}
        shake={true}
      />

      <Button
        buttonStyle={styles.button}
        onPress={() => onSubmit()}
        title="Create Title"
      />
    </>
  )
}

export default withForm(INITIAL_STATE)(TitleForm)
