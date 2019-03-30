import React from 'react'
// Navigation Creator & Container
import { createStackNavigator, createAppContainer } from 'react-navigation'
// Bottom Tab Bar Creator
import createAnimatedTabNavigator from './createAnimatedBottomTabNavigator'
// Redux Injected Bar
import Bar from './NavigationBottomBar'
// Bar Icons
import { Entypo } from '@expo/vector-icons'

// Screens
import {
  HomeScreen,
  SettingsScreen,
  ShowTodoScreen
} from '../screens'

const icons = {
  Home: 'clipboard',
  Settings: 'cog'
}

// Bottom Tab Bar
const TabNavigator = createAnimatedTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen
  },
  {
    initialRouteName: 'Home',
    tabBarComponent: props => <Bar {...props} />,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        let iconName = icons[routeName]

        return <Entypo name={iconName} size={30} color={tintColor} />
      },
      swipeEnabled: true
    })
  }
)

// Routes
export default createAppContainer(
  createStackNavigator(
    {
      Main: TabNavigator,
      ShowTodo: ShowTodoScreen
    },
    {
      initialRouteName: 'Main',
      defaultNavigationOptions: () => ({
        // We will use a custom HOC header component
        header: null
      })
    }
  )
)
