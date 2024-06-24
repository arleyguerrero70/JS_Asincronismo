import fetch from "node-fetch";
const FAKEAPI = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi) {
    return fetch(urlApi)
}

// De esta manera podemos ver toda la información que tenemos en "/products"
// fetchData(`${FAKEAPI}/products`)
//     .then(console.log(`${FAKEAPI}/products`))
//     .then(response => response.json())
//     .then(products => {
//         console.log(products)
//     })
//     .catch(error => console.log(`Este es el error ${error}`))
//     .finally(() => console.log('Ha finalizado la consulta a Products'))

fetchData(`${FAKEAPI}/products`)
    .catch(error => console.log(`Este es el error: ${error}`))
    .then(response => response.json())
    .then(products => {
        console.log(products)
        return fetchData(`${FAKEAPI}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product)
        return fetchData(`${FAKEAPI}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name)
    })
    .finally(() => console.log('Finally'))