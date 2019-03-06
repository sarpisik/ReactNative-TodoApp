import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import withTheme from '../HOCs/withTheme'
import { styles } from '../../themes'

export default withTheme(({ theme }) => (
  <View style={[styles.loading, { backgroundColor: theme.primary }]}>
    <ActivityIndicator size="large" color={theme.tertiary} />
  </View>
))
