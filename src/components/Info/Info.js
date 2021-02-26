import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Slider from '../../UI/Slider'

import {
  todayHandler,
  dateHandler,
  daysHandler,
  getDayHandler,
  getMonthHandler,
} from '../../dateFunctions'

const Info = ({ style, data }) => {
  const arr = data.deliveries.map((item) => {
    return item.date
  })
  arr.sort()

  const today = todayHandler()
  const nearest = dateHandler(arr[0])
  const last = dateHandler(arr[arr.length - 1])
  const nearestDays = daysHandler(nearest, today)
  const lastDays = daysHandler(last, today)
  const dayLast = getDayHandler(last)
  const monthLast = getMonthHandler(last)

  return (
    <View>
      <View style={[styles.boxHeaderText, { paddingLeft: style.pading }]}>
        <Text style={styles.title}>{nearestDays} дней</Text>
        <View style={[styles.boxTextСalories, { marginRight: style.margin }]}>
          <Text style={styles.headerTextDiet}>{data.packageName}</Text>
          <Text style={styles.headerTextCalories}>{data.packageCalories}</Text>
        </View>
      </View>
      <View style={styles.containerSlider}>
        <Slider step={arr.length} num={lastDays} />
        <View style={styles.containerSliderText}>
          <Text style={styles.sliderDate}>20 окт</Text>
          <Text style={styles.sliderText}>Осталось {lastDays} дней</Text>
          <Text style={styles.sliderDate}>{`${dayLast} ${monthLast}`}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'roboto-bold',
    fontSize: 35,
    marginTop: 25,
  },
  boxHeaderText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxTextСalories: {
    marginTop: 29.95,
  },
  headerTextDiet: {
    fontFamily: 'roboto-regular',
    fontSize: 9.7,
    color: '#B1B1B1',
  },
  headerTextCalories: {
    fontFamily: 'roboto-bold',
    fontSize: 13,
  },
  containerSlider: {
    marginTop: 16.68,
    marginBottom: 23.26,
  },
  containerSliderText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7.75,
  },
  sliderDate: {
    color: '#9E9E9E',
    fontSize: 11,
    fontFamily: 'roboto-regular',
  },
  sliderText: {
    fontSize: 11,
    fontFamily: 'roboto-regular',
  },
})

export default Info
