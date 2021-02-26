import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Slider from '../../UI/Slider'

const Info = ({ style }) => {
  return (
    <View>
      <View style={[styles.boxHeaderText, { paddingLeft: style.pading }]}>
        <Text style={styles.title}>6 дней</Text>
        <View style={[styles.boxTextСalories, { marginRight: style.margin }]}>
          <Text style={styles.headerTextDiet}>PRO рацион</Text>
          <Text style={styles.headerTextCalories}>2000 кКал</Text>
        </View>
      </View>
      <View style={styles.containerSlider}>
        <Slider />
        <View style={styles.containerSliderText}>
          <Text style={styles.sliderDate}>20 окт</Text>
          <Text style={styles.sliderText}>Осталось 25 дней</Text>
          <Text style={styles.sliderDate}>10 нояб</Text>
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
    marginRight: 39.33,
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
