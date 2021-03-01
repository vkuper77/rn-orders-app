import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native'
import { useSelector } from 'react-redux'
import Info from '../Info'
import { THEME } from '../../UI/theme'

import {
  dateHandler,
  getMonthHandler,
  getWeekDayHandler,
  todayHandler,
  daysHandler,
  getDayHandler,
} from '../../dateFunctions'

const Card = ({ onOpen, id }) => {
  const [actualDate, setActualDate] = useState(false)

  const device = Platform.OS

  const order = useSelector((state) =>
    state.order.orders.find((ord) => ord.id === id)
  )
  const arr = order.deliveries.map((item) => {
    return item.date
  })

  arr.sort()

  useEffect(() => {
    const activeOrders = arr.filter((item) => {
      const day1 = todayHandler(item)
      const day2 = dateHandler(item)
      const resultDay = Math.round(daysHandler(day2, day1))
      return resultDay > 0 ? item : null
    })

    if (activeOrders.length) {
      const timeAddress = order.deliveries.filter((item) => {
        return item.date === activeOrders[0]
      })
      const time = timeAddress[0].interval.split('-')
      const nearest = dateHandler(activeOrders[0])
      const month = getMonthHandler(nearest)
      const weekDay = getWeekDayHandler(nearest)
      const day = getDayHandler(nearest)
      setActualDate({
        timeAddress,
        time,
        month,
        weekDay,
        day,
      })
    }
  }, [order])

  return (
    <TouchableOpacity style={styles.container} onPress={() => onOpen()}>
      <Info style={{ pading: 0, margin: 12 }} data={order} />
      {actualDate ? (
        <View style={styles.containerInfoDelivery}>
          <View style={styles.dateBlueBlock}>
            <Text style={styles.dateBlueBlockText}>{actualDate.month}</Text>
            <Text style={styles.dateBlueBlockNum}>{actualDate.day}</Text>
          </View>
          <View>
            <View style={styles.dateInfoBlock}>
              <Text
                style={[
                  styles.dateInfoText,
                  { fontSize: device === 'android' ? 15 : 17 },
                ]}
              >
                Ближайшая доставка
              </Text>
              <Text
                style={[
                  styles.dateInfoTextColor,
                  { fontSize: device === 'android' ? 15 : 17 },
                ]}
              >
                в {actualDate.weekDay} -
              </Text>
              <View style={styles.dateInfoTimeBlok}>
                <Text
                  style={styles.dateInfoTimeText}
                >{`с ${actualDate.time[0]} до ${actualDate.time[1]}`}</Text>
                <Text style={styles.dateInfoTimeTextColor}>
                  {actualDate.timeAddress[0].address}
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <Text>Ваши заказы доставлены</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 274,
    backgroundColor: '#F5F5F5',
    borderRadius: 6,
    paddingHorizontal: 18,
    marginBottom: 15,
  },
  containerInfoDelivery: {
    flexDirection: 'row',
    marginLeft: 17.3,
    marginBottom: 16.61,
    alignItems: 'center',
  },
  dateBlueBlock: {
    width: 57,
    height: 99,
    backgroundColor: THEME.colorBlue,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateBlueBlockText: {
    color: '#fff',
    fontSize: 15,
  },
  dateBlueBlockNum: {
    color: '#fff',
    fontFamily: 'roboto-bold',
    fontSize: 20,
  },
  dateInfoBlock: {
    marginLeft: 23.11,
  },
  dateInfoText: {
    fontFamily: 'roboto-bold',
  },
  dateInfoTextColor: {
    fontFamily: 'roboto-bold',
    color: THEME.colorBlue,
  },
  dateInfoTimeBlok: {
    marginTop: 8.86,
  },
  dateInfoTimeText: {
    fontWeight: '500',
  },
  dateInfoTimeTextColor: {
    color: '#949494',
    marginTop: 3.32,
  },
})

export default Card
