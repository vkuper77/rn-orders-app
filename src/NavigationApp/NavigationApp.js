import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../screen/SignIn'
import Orders from '../screen/Orders'
import Detail from '../screen/Detail'

const HomeStack = createStackNavigator()
const SignInStack = createStackNavigator()

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Orders"
      component={Orders}
      options={{ headerShown: false, cardStyle: { backgroundColor: '#fff' } }}
    />
    <HomeStack.Screen
      name="Detail"
      component={Detail}
      options={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}
    />
  </HomeStack.Navigator>
)

const SignInStackScreen = () => (
  <SignInStack.Navigator>
    <SignInStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ headerShown: false, cardStyle: { backgroundColor: '#fff' } }}
    />
  </SignInStack.Navigator>
)

const NavigationApp = () => {
  const userToken = useSelector((state) => state.client.userToken)
  return (
    <NavigationContainer>
      {userToken ? <HomeStackScreen /> : <SignInStackScreen />}
    </NavigationContainer>
  )
}

export default NavigationApp
