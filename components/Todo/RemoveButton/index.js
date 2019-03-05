import React from 'react'
import { Button } from 'react-native-elements'
import ACTIONS from '../../../constants'
import { styles } from '../../../themes'

export default ({ count, removeTodo, list, id }) =>
  count ? (
    <Button
      buttonStyle={styles.removeButton}
      title={`Remove (${count})`}
      titleStyle={styles.headerText}
      onPress={() =>
        removeTodo(
          list === 'titles'
            ? { type: ACTIONS.CATEGORY_DELETE }
            : { type: ACTIONS.TODO_TOGGLED_DELETE, titleId: id }
        )
      }
    />
  ) : null
