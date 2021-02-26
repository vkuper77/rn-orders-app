import * as Font from 'expo-font'

export async function assets() {
  try {
    await Font.loadAsync({
      'roboto-bold': require('../assets/Fonts/Roboto-Bold.ttf'),
      'roboto-regular': require('../assets/Fonts/Roboto-Regular.ttf'),
    })
  } catch (error) {
    console.log('Error', error)
  }
}
