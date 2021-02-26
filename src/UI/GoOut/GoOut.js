import React from 'react'
import { Image, StyleSheet } from 'react-native'

const GoOut = () => (
  <Image
    style={styles.img}
    source={require('../../../assets/img/logout.png')}
  />
)

const styles = StyleSheet.create({
  img: {
    width: 25,
    height: 25,
  },
})

export default GoOut
