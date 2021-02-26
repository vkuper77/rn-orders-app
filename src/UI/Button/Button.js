import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { THEME } from '../theme'

const Button = ({ title, style }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: `100%`,
    marginTop: 51,
  },
  btn: {
    marginHorizontal: 18,
    height: 65,
    backgroundColor: THEME.colorBlue,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  text: {
    fontFamily: 'roboto-bold',
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'white',
  },
})

export default Button
