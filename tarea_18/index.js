const nombre = "Christian"
const apellido = "Quirama Hernández"
const persona = {
    nombrePersona: nombre,
    apellidoPersona: apellido,
}

sessionStorage.setItem("personaKey", JSON.stringify({persona}))
const sessionData = JSON.parse(sessionStorage.getItem("personaKey"))
localStorage.setItem("personaKey", JSON.stringify({persona}))
const localData = JSON.parse(localStorage.getItem("personaKey"))
console.log(sessionData)

document.cookie = "personaCookie=persona; expires=" + new Date(2022,10,07).toUTCString();

