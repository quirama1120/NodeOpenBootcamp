const parrafos = document.querySelectorAll(".parrafo")
const sections = document.querySelectorAll(".container")
const garbage = document.querySelector(".garbage-container")

parrafos.forEach((parrafo) => {
    
    parrafo.addEventListener("dragstart", event => {
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
    })
    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging")
    })
    parrafo.addEventListener("dblclick", () => {
        parrafo.remove()
    })
})
garbage.addEventListener("dragover", event => {
    event.preventDefault()
})
garbage.addEventListener("drop", event => {
    const parrafoId = event.dataTransfer.getData("id")
            const parrafo = document.getElementById(parrafoId)
            garbage.appendChild(parrafo)
            const parrafoAgregado = garbage.appendChild(parrafo)
            parrafoAgregado.remove(parrafo)
})
sections.forEach(section => {
    section.addEventListener("dragover", event => {
        event.preventDefault()
    })
    sections.forEach(section => {
        section.addEventListener("drop", event => {
            const parrafoId = event.dataTransfer.getData("id")
            const parrafo = document.getElementById(parrafoId)
            section.appendChild(parrafo)
            // const parrafoAgregado = section.appendChild(parrafo)
            // parrafoAgregado.remove(parrafo)
        })
        
    })
})




