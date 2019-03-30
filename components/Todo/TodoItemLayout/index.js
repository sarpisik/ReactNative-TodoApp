import React from 'react'
import { TextInput, View, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { CheckBox } from 'react-native-elements'
import { styles } from '../../../themes'

const Item = ({ children, container }) => {
  return <View style={container}>{children}</View>
}

export default ({
  onPressCheckBox,
  checked,
  colors,
  toggleEdit,
  isCategory,
  ...restProps
}) => (
  <View
    style={[
      styles.row,
      {
        backgroundColor: checked ? colors.primary : colors.secondary,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary
      }
    ]}>
    {/* Checkbox icon */}
    <Item container={styles.rowIcon}>
      <CheckBox
        size={28}
        center
        containerStyle={{ paddingVertical: 5 }}
        onPress={onPressCheckBox}
        checked={checked}
        checkedColor={colors.tertiary}
        uncheckedColor={colors.primary}
      />
    </Item>

    {/* Input field */}
    <Item container={[styles.rowTitle, { flex: isCategory ? 4 : 5 }]}>
      <View>
        <TextInput
          style={[styles.rowText, { color: colors.tertiary }]}
          {...restProps}
        />
      </View>
    </Item>

    {/* If this is a category item, display navigate icon */}
    {isCategory && (
      <Item container={[styles.rowIcon, { paddingVertical: 10 }]}>
        <TouchableOpacity onPress={restProps.onNavigate}>
          <Entypo
            style={styles.icon}
            name="folder"
            size={28}
            color={checked ? colors.tertiary : colors.primary}
          />
        </TouchableOpacity>
      </Item>
    )}
  </View>
)
