import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../../UI/Button'
import Input from '../../UI/Input/Input'

const SingIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать!</Text>
      <Input placeholder="Логин" type="username" secure={false} />
      <Input placeholder="Пароль" type="password" secure={true} />
      <Button title="Войти" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontFamily: 'roboto-bold',
    fontSize: 25,
    lineHeight: 29.3,
    letterSpacing: 0.3,
    marginBottom: 45,
  },
})

export default SingIn
