// 6. Crea tres funciones que devuelvan promesas con tiempos
//  de espera distintos.A continuación, usa Promise.all() 
// para ejecutarlas todas al mismo tiempo y mostrar 
// "Todas las promesas resueltas" cuando terminen.

//Promesas

const work = true

let Primero = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (work) { (resolve("Funciona")) }
        else { (reject("No funciona")) }
    }, 1500);
})
let Segundo = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (work) { (resolve("Funciona")) }
        else { (reject("No funciona")) }
    }, 2000);
})
let Tercero = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (work) { (resolve("Funciona")) }
        else { (reject("No funciona")) }
    }, 3000);
})

try {
    let rest = await Promise.all([Primero, Segundo, Tercero])
    console.log("Todas las promesas resueltas", rest)
} catch (error) {
    console.log(error)
}
// Callbacks
function consoleNumeros(numeros) {
    console.log(`Lista: ${numeros}`)
}

function Lista(callback) {
    var numeros = [1, 2, 3, 4, 5]
    callback(numeros)
}

Lista(consoleNumeros)

function consoleNombre(nombre) {
    console.log(`Su nombre es: ${nombre}`)
}
function propmtName(callback) {
    let nombre = prompt("Ingrese su nombre")
    callback(nombre)
}

propmtName(consoleNombre)

function paso1(callback) {
    setTimeout(() => {
        console.log("Paso 1 Completado")
        callback()
    }, 1000);
}

function paso2(callback) {
    setTimeout(() => {
        console.log("Paso 2 Completado")
        callback()
    }, 1000);
}

function paso3(callback) {
    setTimeout(() => {
        console.log("Paso 3 Completado")
        callback()
    }, 1000);
}

paso1(() => {
    paso2(() => {
        paso3(() => {
            setTimeout(() => {
                console.log('Todos los pasos fueron completados')                
            }, 1000);
        })
    })
})

function wait(ms){
    return new Promise(resolve=> setTimeout(resolve, ms))
}

async function exect() {
    console.log("Inicio del proceso")
    await wait(5000)
    console.log("El proceso despues de 5 seg");
    await wait(1000)
    console.log("El proceso despues de 1 seg");
    await wait(2000)
    console.log("El proceso despues de 2 seg")
    await wait (1000)
    console.log("Fin del proceso")
}

exect()