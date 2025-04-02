let nombre = {
    nombre: "Nicolas",
    apellido: "Muskus",
    edad: 17
}

let AgregarPropiedad = Object.defineProperty(nombre, "vivo", {value:"si"})

console.log(nombre)