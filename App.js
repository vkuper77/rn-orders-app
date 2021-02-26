import React, { useState } from 'react'
import AppLoading from 'expo-app-loading'
import { Provider } from 'react-redux'

import { assets } from './src/assets'
import NavigationApp from './src/NavigationApp'
import store from './src/redux/store'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={assets}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    )
  }

  return (
    <Provider store={store}>
      <NavigationApp />
    </Provider>
  )
}
