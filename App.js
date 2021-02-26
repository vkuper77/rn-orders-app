import React, { useState } from 'react'
import { View } from 'react-native'
import AppLoading from 'expo-app-loading'
import { assets } from './src/assets'
import SingIn from './src/screen/SignIn'
import Orders from './src/screen/Orders'
import Detail from './src/screen/Detail'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={assets}
  //       onFinish={() => setIsReady(true)}
  //       onError={(err) => console.log(err)}
  //     />
  //   )
  // }

  return (
    <View style={{ flex: 1 }}>
      {/* <SingIn /> */}
      {/* <Orders /> */}
      {/* <Detail /> */}
      hello
    </View>
  )
}
