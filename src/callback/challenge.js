const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const FAKEAPI = ' https://api.escuelajs.co/api/v1'

function fetchData(urlFakeApi, callback) {
  // Hacemos un llamado al paquete que hemos instalado con NPM
  let xhttp = new XMLHttpRequest()

  xhttp.open('GET', urlFakeApi, true)

  // La propiedad onreadystatechange es un manejador de eventos
  xhttp.onreadystatechange = function (event) {
    // En esta línea se evalúa si el estado de la propiedad readyState ha finalizado
    if (xhttp.readyState === 4) {
      // con "status" revisamos la respuesta HTTP del servidor de la API
      if (xhttp.status === 200) {
        // La respuesta será un objeto, por eso usamos la propiedad de JSON.pase
        callback(null, JSON.parse(xhttp.responseText))
      }
      else {
        // En caso de tener un error va a ser más fácil entender en dónde está
        const error = new Error(`Error ${urlFakeApi}`)
        return callback(error, null)
      }
    }
  }
  // Como esta es una función asíncrona
  // estamos esperando a que todo se ejecute
  // para enviar una respuesta, ya sea positiva "status 200"
  // o que nos informe en dónde ha detectado un error "error"
  xhttp.send()
}

fetchData(`${FAKEAPI}/products`, function (error1, data1) {
  if (error1) return console.error(error1)
  fetchData(`${FAKEAPI}/products/${data1[0].id}`, function (error2, data2) {
    if (error2) return console.error(error2)
    fetchData(`${FAKEAPI}/categories/${data2?.category?.id}`, function (error3, data3) {
      if (error3) return console.error(error3)
      console.log(`Respuesta 1: ${data1[0]}`)
      console.log(`Respuesta 2: ${data2.title}`)
      console.log(`Respuesta 3: ${data3.name}`)
    })
  })
})