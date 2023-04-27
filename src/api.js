const url = 'https://api.coincap.io/v2'

const getAssets = async () => {
  try {
    const response = await fetch(`${url}/assets?limit=20`)
    const {data} = await response.json()
    return data
  } catch (error) {
    console.error(`¡Ocurrió un error con el API!: ${error}`)
  }
}

//Se puede usar cualquier de las dos sintaxis en la funcion

//function getAssets() {
//return fetch(`${url}/assets?limit=20`)
//.then(res => res.json())
//.then(res => res.data)
//}

function getAsset(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then((res) => res.json())
    .then((res) => res.data)
}

function getAssetHistory(coin) {
  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)
  const start = now.getTime()

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data)
}

function getMarkets(coin) {
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then((res) => res.json())
    .then((res) => res.data)
}

function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`)
    .then((res) => res.json())
    .then((res) => res.data)
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
}
