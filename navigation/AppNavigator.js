import React from 'react'
import { Animated, Easing } from 'react-native'

// Navigation Creator & Container
import { createStackNavigator, createAppContainer } from 'react-navigation'
// Bottom Tab Bar Creator
import createAnimatedTabNavigator from './createAnimatedBottomTabNavigator'
// Redux Injected Bar
import Bar from './NavigationBottomBar'
// Bar Icons
import { Entypo } from '@expo/vector-icons'

// Screens
import { HomeScreen, SettingsScreen, AddTodoScreen } from '../screens'

// Transition will be used later for stack navigator
const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0]
      })

      return { transform: [{ translateX }] }
    }
  }
}

const icons = {
  Home: 'clipboard',
  Settings: 'cog'
}

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

        return <Entypo name={iconName} size={25} color={tintColor} />
      }
    })
  }
)

export default createAppContainer(
  createStackNavigator(
    {
      Main: TabNavigator,
      AddTodo: AddTodoScreen
    },
    {
      initialRouteName: 'Main',
      defaultNavigationOptions: () => ({
        header: null
      })
    }
  )
)
