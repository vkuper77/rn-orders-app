import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import Info from '../Info'
import { THEME } from '../../UI/theme'

import {
  dateHandler,
  getMonthHandler,
  getWeekDayHandler,
} from '../../dateFunctions'

const Card = ({ onOpen, id }) => {
  const order = useSelector((state) =>
    state.order.orders.find((ord) => ord.id === id)
  )

  const arr = order.deliveries.map((item) => {
    return item.date
  })
  arr.sort()

  const timeAddress = order.deliveries.filter((item) => {
    return item.date === arr[0]
  })
  const time = timeAddress[0].interval.split('-')

  const nearest = dateHandler(arr[0])
  const month = getMonthHandler(nearest)
  const weekDay = getWeekDayHandler(nearest)

  return (
    <TouchableOpacity style={styles.container} onPress={() => onOpen()}>
      <Info style={{ pading: 0, margin: 12 }} data={order} />
      <View style={styles.containerInfoDelivery}>
        <View style={styles.dateBlueBlock}>
          <Text style={styles.dateBlueBlockText}>{month}</Text>
          <Text style={styles.dateBlueBlockNum}>28</Text>
        </View>
        <View>
          <View style={styles.dateInfoBlock}>
            <Text style={styles.dateInfoText}>Ближайшая доставка</Text>
            <Text style={styles.dateInfoTextColor}>в {weekDay} -</Text>
            <View style={styles.dateInfoTimeBlok}>
              <Text
                style={styles.dateInfoTimeText}
              >{`с ${time[0]} до ${time[1]}`}</Text>
              <Text style={styles.dateInfoTimeTextColor}>
                {timeAddress[0].address}
              </Text>
            </View>
          </View>
        </View>
      </View>
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
    fontSize: 17,
  },
  dateInfoTextColor: {
    fontFamily: 'roboto-bold',
    fontSize: 17,
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
