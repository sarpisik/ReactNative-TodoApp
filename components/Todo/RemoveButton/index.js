import React from 'react'
import { Button } from 'react-native-elements'
import ACTIONS from '../../../constants'
import { styles } from '../../../themes'

// If any category/todo toggled, display the button with the number of toggled.
// Else, hide the button.
export default ({ count, removeTodo, list, id, colors }) =>
  count ? (
    <Button
      buttonStyle={[
        styles.removeButton,
        { backgroundColor: colors.tertiary, borderTopColor: colors.primary }
      ]}
      title={`Remove (${count})`}
      titleStyle={[styles.headerText, { color: colors.primary }]}
      onPress={() =>
        removeTodo(
          list === 'titles'
            ? { type: ACTIONS.CATEGORY_DELETE }
            : { type: ACTIONS.TODO_TOGGLED_DELETE, titleId: id }
        )
      }
    />
  ) : null
