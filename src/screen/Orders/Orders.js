import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import Card from '../../components/Card'
import GoOut from '../../UI/GoOut'
import { loadOrders, outUser } from '../../redux/actions/actions'

const Orders = ({ navigation }) => {
  const dispatch = useDispatch()
  const activeСlient = useSelector((state) => state.client.activeСlient)
  const id = activeСlient[0].id

  useEffect(() => {
    dispatch(loadOrders(id))
  }, [id])

  const ordersUser = useSelector((state) => state.order.orders)
  const login = useSelector((state) => state.order.loading)

  const openDetail = (order) => {
    navigation.navigate('Detail', {
      orderId: order.id,
    })
  }

  const outUserHandler = () => {
    dispatch(outUser())
  }

  const noOrders = (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>У вас пока нет заказов </Text>
    </View>
  )

  const orders = (
    <ScrollView style={styles.scroll}>
      {ordersUser.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            data={item}
            onOpen={() => openDetail(item)}
          />
        )
      })}
    </ScrollView>
  )

  if (login) {
    return <ActivityIndicator style={{ flex: 1, justifyContent: 'center' }} />
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={styles.title}>
          Мои заказы <Text style={styles.number}>{ordersUser.length}</Text>
        </Text>
        <TouchableOpacity onPress={outUserHandler} style={styles.out}>
          <GoOut />
        </TouchableOpacity>
      </View>
      {ordersUser.length ? orders : noOrders}
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
  out: {
    marginRight: 23,
    marginTop: 15,
  },
})

export default Orders
