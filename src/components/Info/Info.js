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

  const orderProcessing = (num) => {
    return num > 0
  }

  const completedOrders = arr.filter((item) => {
    const day1 = todayHandler(item)
    const day2 = dateHandler(item)
    const resultDay = Math.round(daysHandler(day2, day1))
    return orderProcessing(resultDay) ? null : item
  })

  const activeOrders = arr.filter((item) => {
    const day1 = todayHandler(item)
    const day2 = dateHandler(item)
    const resultDay = Math.round(daysHandler(day2, day1))
    return orderProcessing(resultDay) ? item : null
  })

  const today = todayHandler()
  const nearest = dateHandler(activeOrders[0])
  const firstOrder = dateHandler(arr[0])

  const nearestDays = Math.round(daysHandler(nearest, today))
  const last = dateHandler(arr[arr.length - 1])
  const lastDays = Math.round(daysHandler(last, today))
  const dayLast = getDayHandler(last)
  const monthLast = getMonthHandler(last)

  const nearestDate = getDayHandler(firstOrder)
  const nearestMonth = getMonthHandler(firstOrder)

  return (
    <View>
      <View style={[styles.boxHeaderText, { paddingLeft: style.pading }]}>
        <Text style={styles.title}>
          {activeOrders.length ? `${nearestDays} дней` : 'Доставлено'}
        </Text>
        <View style={[styles.boxTextСalories, { marginRight: style.margin }]}>
          <Text style={styles.headerTextDiet}>{data.packageName}</Text>
          <Text style={styles.headerTextCalories}>{data.packageCalories}</Text>
        </View>
      </View>
      <View style={styles.containerSlider}>
        <Slider step={completedOrders.length} steps={arr.length} />
        <View style={styles.containerSliderText}>
          <Text style={styles.sliderDate}>
            {`${nearestDate} ${nearestMonth}`}
          </Text>
          <Text style={styles.sliderText}>
            {activeOrders.length ? `Осталось ${lastDays} дней` : null}
          </Text>
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
