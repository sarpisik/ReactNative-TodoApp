import React from 'react'
import { View } from 'react-native'
import { Input } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'
import { styles } from '../../themes'

export default ({
  style = styles.formContainer,
  autoFocus = true,
  icon = 'new-message',
  inputContainerStyle = styles.inputContainer,
  inputStyle = styles.inputStyle,
  placeholder = 'Type',
  placeholderTextColor = '#61dafb',
  returnKeyType = 'go',
  ...props
}) => {
  return (
    <Input
      inputContainerStyle={inputContainerStyle}
      leftIcon={<Entypo name={icon} color={placeholderTextColor} size={18} />}
      inputStyle={inputStyle}
      autoFocus={autoFocus}
      errorStyle={styles.errorInputStyle}
      placeholderTextColor={placeholderTextColor}
      placeholder={placeholder}
      returnKeyType={returnKeyType}
      {...props}
    />
  )
}
