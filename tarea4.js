const nombre = "christian";
const apellido = "quirama     hernandez";
const estudiante = `${nombre}  ${apellido}`
console.log(estudiante)
const estudianteMayus = estudiante.toUpperCase() 
console.log(estudianteMayus)
const estudianteMinus = estudiante.toLocaleLowerCase()
console.log(estudianteMinus)
const numStr = estudiante.length
console.log(numStr)
const firstLetter = nombre.charAt(0)
console.log(firstLetter)
const lastLetter = apellido.charAt(apellido.length -1 )
console.log(lastLetter)
const noSpaceEst = estudiante.trim()
console.log(noSpaceEst)
const isNombreInApellido = estudiante.includes(`${nombre}`)
console.log(isNombreInApellido)