import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Info from '../Info'
import { THEME } from '../../UI/theme'

const Card = () => {
  return (
    <View style={styles.container}>
      <Info />
      <View style={styles.containerInfoDelivery}>
        <View style={styles.dateBlueBlock}>
          <Text style={styles.dateBlueBlockText}>Окт</Text>
          <Text style={styles.dateBlueBlockNum}>28</Text>
        </View>
        <View>
          <View style={styles.dateInfoBlock}>
            <Text style={styles.dateInfoText}>Ближайшая доставка</Text>
            <Text style={styles.dateInfoTextColor}>в понедельник -</Text>
            <View style={styles.dateInfoTimeBlok}>
              <Text style={styles.dateInfoTimeText}>с 10:00 до 12:00</Text>
              <Text style={styles.dateInfoTimeTextColor}>
                Работа на объекте в Басма
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
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
