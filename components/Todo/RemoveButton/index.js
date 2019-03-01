import React from 'react'
import { Button } from 'react-native-elements'
import { styles } from '../../../themes'

export default ({ count, removeTodo }) =>
  count ? (
    <Button
      buttonStyle={styles.removeButton}
      title={`Remove (${count})`}
      titleStyle={styles.headerText}
      onPress={() => removeTodo()}
    />
  ) : null
