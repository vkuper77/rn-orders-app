export const clientRequest = () => {
  return new Promise((resolve, reject) => {
    const clients = require('./clients.json')
    resolve(clients)
  })
}

export const orderRequest = (id) => {
  return new Promise((resolve, reject) => {
    const orders = require('./orders.json')
    const ordersUser = orders.filter((item) => {
      return item.client_id === id ? item : null
    })
    resolve(ordersUser)
  })
}
