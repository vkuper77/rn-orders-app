export const clientRequest = async () => {
  return await new Promise((resolve, reject) => {
    const clients = require('./clients.json')
    resolve(clients)
  })
}

export const orderRequest = async (id) => {
  return await new Promise((resolve, reject) => {
    const orders = require('./orders.json')
    const ordersUser = orders.filter((item) => {
      return item.client_id === id ? item : null
    })
    resolve(ordersUser)
  })
}
