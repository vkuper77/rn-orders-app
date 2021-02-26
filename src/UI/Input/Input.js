import React, { useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { THEME } from '../theme'

const Input = ({ placeholder, type, secure }) => {
  const [value, setValue] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        textContentType={type}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="black"
        secureTextEntry={secure}
        autoCorrect={false}
        autoCapitalize="none"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 12,
  },
  input: {
    height: 56,
    backgroundColor: '#FAFAFA',
    borderColor: THEME.colorBlue,
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
