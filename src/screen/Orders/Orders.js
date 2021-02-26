import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import Card from '../../components/Card'

const Orders = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Мои заказы <Text style={styles.number}>{arr.length}</Text>
      </Text>
      <ScrollView style={styles.scroll}>
        {arr.map((item) => {
          return <Card key={item} />
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: 'roboto-bold',
    fontSize: 22,
    marginBottom: 11,
    marginTop: 30,
    marginLeft: 24,
  },
  number: {
    fontFamily: 'roboto-regular',
    fontSize: 20,
    color: '#929292',
    marginLeft: 8,
  },
  scroll: {
    paddingHorizontal: 18,
  },
})

export default Orders
