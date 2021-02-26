import * as Font from 'expo-font'

export async function assets() {
  await Font.loadAsync({
    'roboto-bold': require('../assets/Fonts/Roboto-Bold.ttf'),
    'roboto-regular': require('../assets/Fonts/Roboto-Regular.ttf'),
  })
}
