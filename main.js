for (let i = 1; i <= 20; i++) {
    console.log(`For: ${i}`)
}
let min = 1
while (true) {
    if (min <= 20) {
        console.log("While: " + min)
        min++
    } else {
        break
    }
}

for (let minimo = 0; minimo <= 50; minimo++) {
    if (minimo %2 == 0) {
        console.log(`Pares: ${minimo}`)
    }
}

let numeros = [10,20,30]
let contador = 1
for (let a = 0; a < numeros.length; a++) {
    contador *= numeros[a]
    console.log(`Numeros multiplicados: ${contador}`)
}
let maximo = 10
let minimo = 0
for (let b = minimo; b <= maximo; b++){
    let temporal = minimo + maximo
    console.log(temporal)
    minimo = maximo
    maximo = temporal
}