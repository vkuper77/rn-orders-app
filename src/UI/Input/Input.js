import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { THEME } from '../theme'

const Input = ({ placeholder, type, secure, change, onBlur, style }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { borderColor: style }]}
        textContentType={type}
        onChangeText={change}
        placeholder={placeholder}
        placeholderTextColor="black"
        secureTextEntry={secure}
        autoCorrect={false}
        autoCapitalize="none"
        onBlur={onBlur}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 7,
  },
  input: {
    height: 56,
    backgroundColor: '#FAFAFA',
    borderWidth: 2,
    borderRadius: 6,
    marginHorizontal: 18,
    fontSize: 18,
    fontFamily: 'roboto-regular',
    color: 'black',
    paddingLeft: 11,
  },
})

export default Input
