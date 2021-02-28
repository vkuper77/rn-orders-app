import React from 'react'
import { View, Text, Image, StyleSheet, Platform } from 'react-native'

import {
  dateHandler,
  getDayHandler,
  getWeekDayHandler,
  getMonthHandler,
} from '../../dateFunctions'

const Purchase = ({ data }) => {
  const date = dateHandler(data.date)
  const day = getDayHandler(date)
  const weekDay = getWeekDayHandler(date)
  const month = getMonthHandler(date)

  const device = Platform.OS

  return (
    <View
      style={[
        styles.container,
        {
          marginHorizontal: 23,
        },
      ]}
    >
      <View style={styles.container}>
        <Image
          source={require('../../../assets/img/purchase.png')}
          style={styles.purchase}
        />
        <Text
          style={{
            fontFamily: 'roboto-regular',
            fontSize: device === 'android' ? 12 : 14,
          }}
        >{`${day} ${month.toLowerCase()}, ${weekDay}`}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>{data.interval}</Text>
        <Image
          source={require('../../../assets/img/arrow.png')}
          style={{ marginLeft: device === 'android' ? 15 : 36 }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  purchase: {
    marginRight: 11.31,
    marginLeft: 1,
    marginTop: 8.85,
    marginBottom: 20.44,
  },

  // text: {
  //   fontFamily: 'roboto-regular',
  //   fontSize: 14,
  // },
})

export default Purchase
