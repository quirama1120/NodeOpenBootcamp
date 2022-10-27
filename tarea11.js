function sinParametros() {
    return true
}
function asincrona() {
    setTimeout(()=> {
        console.log("hola soy una promesa")
    }, "5000")
}
asincrona()
function* generadorId() {
let id = 0;
while (id < 10){ 
yield id++ * 2}
}
let generar = generadorId()
console.log(generar.next().value)
console.log(generar.next().value)
console.log(generar.next().value)
console.log(generar.next().value)
console.log(generar.next().value)
console.log(generar.next().value)
console.log(generar.next().value)
console.log(generar.next().value)
console.log(generar.next().value)
console.log(generar.next().value)
