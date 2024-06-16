function sum(number1, number2) {
    return number1 + number2;
}

function calc(number1, number2, callback){
    return callback(number1, number2);
}

console.log(calc(2, 2, sum))

function gritting(name){
    console.log(`Hola ${name}`)
}

gritting('Arley')

setTimeout(gritting,2000,'Arlo')