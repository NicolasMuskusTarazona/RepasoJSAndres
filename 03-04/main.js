let Familia = {
    personas: [
        {
            nombre: "Nicolas",
            apellido: "Muskus",
            edad: 17,
            vivo: true,
            fisico: {
                peso: 65,
                altura: 1.78,
            },
            lugarNacimiento: "Giron"
        },
        {
            nombre: "Danilo",
            apellido: "Muskus",
            edad: 17,
            vivo: true,
            fisico: {
                peso: 65,
                altura: 1.80,
            },
            lugarNacimiento: "Giron"
        },
        {
            nombre: "Yojana",
            apellido: "Tarazona",
            edad: 50,
            vivo: true,
            fisico: {
                peso: 70,
                altura: 1.70,
            },
            lugarNacimiento: "Chinacota"
        },
        {
            nombre: "Orlando",
            apellido: "Muskus",
            edad: 58,
            vivo: true,
            fisico: {
                peso: 80,
                altura: 1.74,
            },
            lugarNacimiento: "Bucaramanga"
        }
    ]
}
// Primero entro al objeto principal Familia
// Dentro de el objeto principal 
// existe un array llamado personas con multiples objetos
// luego como son 4 Personas le colocare un nombre a cada persona
// Yo puse a b c d Para identificarlos mejor
// luego si podemos filtrar lo que queremos
const [a, b, c, d] = Familia.personas
// Aqui empiezo filtrando por Nombre
// le ponemos apodos 
const { nombre: Nombre1 } = a
// tambien podemos hacer esto que seria mas facil

console.log(`${Nombre1} tiene ${a.edad} años, fisico:`)
let fisico1 = a.fisico
console.log(fisico1)
const { nombre: nombre2 } = b
const { edad: edad2 } = b
console.log(`${nombre2} tiene ${edad2} años, fisico:`)
let fisico2 = b.fisico
console.log(fisico2)
// o
console.log(`${c.nombre} tiene ${b.edad} años, fisico:`)
let fisico3 = c.fisico
console.log(fisico3)

console.log(`${d.nombre} tiene ${d.edad} años. fisico:`) // Object Object
let fisico4 = d.fisico
console.log(fisico4)

let miPromesa = new Promise((resolve, reject) => {
    console.log("Inicio de la promesa");
    let isAlive = true;
    setTimeout(() => {
        if (isAlive) {
            resolve("Ironman esta vivo");
        } else {
            reject("Ironman est amuerto :c");
        }
    }, 2000);
});

let miOtraPromesa = new Promise((resolve, reject) => {
    console.log("Inicio de la promesa Otra Promesa");
    let isAlive = false;
    setTimeout(() => {
        if (isAlive) {
            resolve("Ironman esta vivo");
        } else {
            reject("Ironman est amuerto :c");
        }
    }, 5000);
});


try {
    let result = await Promise.allSettled(
        [miPromesa, miOtraPromesa]
    )
    console.log(result);
} catch (error) {
    console.log(error);
}