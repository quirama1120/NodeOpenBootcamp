const fechaHoy = new Date();
console.log(fechaHoy)
const nacimiento = new Date(1994,10,20)
console.log(nacimiento)
const comparationDate = fechaHoy.getTime() > nacimiento.getTime() 
console.log(comparationDate)
const day = nacimiento.getDay()
console.log(day)
const month = nacimiento.getMonth() + 1
console.log(month)
const year = nacimiento.getFullYear()
console.log(year)