import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native'
import Info from '../../components/Info'
import Purchase from '../../components/Purchase'
import { THEME } from '../../UI/theme'
import { deleteOrder, repeatOrder } from '../../redux/actions/actions'

const Detail = ({ navigation, route }) => {
  const dispatch = useDispatch()

  const orderId = route.params.orderId
  const order = useSelector((state) =>
    state.order.orders.find((ord) => ord.id === orderId)
  )

  const handlerRepeatOrder = () => {
    Alert.alert(
      'Дублировать заказ',
      'Вы желаете продублировать заказ',
      [
        {
          text: 'Отменить',

          style: 'cancel',
        },
        {
          text: 'Ok',
          style: 'destructive',
          onPress: () => {
            let newObj = JSON.parse(JSON.stringify(order))
            newObj.id = Date.now().toString()
            dispatch(repeatOrder(newObj))
            navigation.navigate('Orders')
          },
        },
      ],
      { cancelable: false }
    )
  }

  const cancelOrder = () => {
    Alert.alert(
      'Отменить заказ',
      'Вы точно хотите отменить заказ',
      [
        {
          text: 'Отменить',

          style: 'cancel',
        },
        {
          text: 'OK',
          style: 'destructive',
          onPress: () => {
            navigation.navigate('Orders')
            dispatch(deleteOrder(orderId))
          },
        },
      ],
      { cancelable: false }
    )
  }

  if (!order) {
    return null
  }

  const line = <View style={styles.linePurchase} />

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.textBack}>Назад</Text>
      </TouchableOpacity>

      <ScrollView>
        <View style={styles.container}>
          <Info style={{ pading: 5, margin: 12 }} data={order} />
          <Text style={styles.title}>Доставки</Text>
        </View>
        <View style={styles.containerPurchase}>
          {order.deliveries.sort().map((item, i, arr) => {
            return i !== arr.length - 1 ? (
              <View key={item.id}>
                <Purchase data={item} />
                {line}
              </View>
            ) : (
              <View key={item.id}>
                <Purchase data={item} />
              </View>
            )
          })}
        </View>
        <View style={styles.container}>
          <View style={styles.containerBtn}>
            <TouchableOpacity style={styles.btn} onPress={handlerRepeatOrder}>
              <Text style={styles.btnText}>Дублировать заказ</Text>
              <Image source={require('../../../assets/img/img.png')} />
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity style={styles.btn} onPress={cancelOrder}>
              <Text style={styles.btnText}>Отменить заказ</Text>
              <Image source={require('../../../assets/img/delete.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  textBack: {
    fontFamily: 'roboto-regular',
    fontSize: 17,
    marginLeft: 18,
    marginTop: 31,
    color: THEME.colorBlue,
  },
  container: {
    paddingHorizontal: 18,
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
    marginBottom: 80,
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
  containerPurchase: {
    marginBottom: 34.31,
  },
  linePurchase: {
    width: '100%',
    height: 1,
    backgroundColor: '#F5F5F5',
  },
})

export default Detail
