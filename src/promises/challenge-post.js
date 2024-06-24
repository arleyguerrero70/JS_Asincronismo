import fetch from 'node-fetch'
const FAKEAPI = 'https://api.escuelajs.co/api/v1'

function postData(urlApi, dataSend) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataSend)
  })
  return response
}

const classNewData = {
  "title": "Sweater Selección Colombia",
  "price": 200,
  "description": "Sweater oficial selección oficial de Colombia",
  "categoryId": 1,
  "images": [
    "https://placeimg.com/640/480/any"
  ]
}

postData(`${FAKEAPI}/products`, classNewData)
  .catch(() => console.log(`Este es el error: ${error}`))
  .then(response => response.json())
  .then(classNewData => console.log(classNewData))
  .finally(() => console.log('Ha finalizado la función de creación de producto'))