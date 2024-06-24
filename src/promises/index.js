const promise = new Promise(function (resolve, reject) {
    resolve(`Hola! funciono`)
})

const COWS = 5

const countCows = new Promise(function (resolve, reject) {
    if (COWS > 10) {
        resolve(`Si vamos a cumplir, actualmente tenemos ${COWS} vacas en la granja`)
    }
    else {
        reject(`No vamos a cumplir, actualmente tenemos ${COWS} vacas en la granja`)
    }
})

countCows.then((result) => {
    console.log(result)
}).catch(error => {
    console.log(error)
}).finally(() => {
    console.log('Hemos finalizado')
})