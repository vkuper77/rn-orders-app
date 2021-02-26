import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Info from '../../components/Info'
import { THEME } from '../../UI/theme'

const Detail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBack}>Назад</Text>
      <Info style={{ pading: 5, margin: 12 }} />
      <Text style={styles.title}>Доставки</Text>
      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}> Дублировать заказ</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}> Отменить заказ</Text>
          <Text>img</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
  },
  textBack: {
    fontFamily: 'roboto-regular',
    fontSize: 17,
    color: THEME.colorBlue,
    marginTop: 31,
  },
  title: {
    fontFamily: 'roboto-bold',
    fontSize: 17,
    marginVertical: 34,
    marginLeft: 2,
    color: '#070707',
  },
  containerBtn: {
    width: '100%',
    height: 110,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    justifyContent: 'center',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#D6D6D6',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '49%',
    paddingHorizontal: 17,
  },
  btnText: {
    fontFamily: 'roboto-regular',
    fontSize: 17,
    color: '#3F3F3F',
  },
})

export default Detail
