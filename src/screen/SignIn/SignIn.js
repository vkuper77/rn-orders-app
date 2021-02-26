import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

import Button from '../../UI/Button'
import Input from '../../UI/Input/Input'

import { loadClients, signIn } from '../../redux/actions/actions'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

const StyledInput = ({ formikProps, formikKey, type, ...res }) => {
  const inputStyles = {
    color: 'red',
    margin: 0,
    fontSize: 12,
    textAlign: 'center',
  }

  let color = '#1E6FB9'

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    color = 'red'
  }

  return (
    <View style={{ width: '100%' }}>
      <Text style={inputStyles}>
        {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
      </Text>
      <Input
        style={color}
        type={type}
        secure={false}
        change={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...res}
      />
    </View>
  )
}

const validationSchema = yup.object().shape({
  login: yup.string().required().min(4, 'Sees a bit short...'),
  password: yup.string().required(),
})

const SingIn = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadClients())
  }, [])
  const clients = useSelector((state) => state.client.clients)
  const validate = (values) => {
    const person = clients.filter((item) => {
      return item.login === values.login && item.password === values.password
        ? item
        : null
    })

    if (person.length) {
      dispatch(signIn(person))
    } else {
      Alert.alert(
        'Такого пользователь не существует!',
        'Убедитесь, правильно ли введены данные',
        [
          {
            text: 'Ok',
            style: 'destructive',
            onPress: () => {},
          },
        ],
        { cancelable: false }
      )
    }
  }

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Text style={styles.title}>Добро пожаловать!</Text>
        <Formik
          initialValues={{ login: '', password: '' }}
          onSubmit={validate}
          validationSchema={validationSchema}
        >
          {(formikProps) => (
            <React.Fragment>
              <StyledInput
                formikProps={formikProps}
                formikKey="login"
                placeholder="Логин"
                type="username"
              />
              <StyledInput
                formikProps={formikProps}
                formikKey="password"
                placeholder="Пароль"
                type="password"
                secure={true}
              />
              <Button title="Войти" entry={formikProps.handleSubmit} />
            </React.Fragment>
          )}
        </Formik>
      </View>
    </DismissKeyboard>
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
