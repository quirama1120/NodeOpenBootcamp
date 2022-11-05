$("#show").click(() =>{
    $("#ul").append("<li>elmento<li>")
})
$("#hide").click(()=>{
    $("#li-1, #li-2").fadeOut("slow",() => {

    }) 
})
$("#hide").dblclick(()=>{
    $("#li-3, #li-4").css({color:"red"})
})
  $("li").mouseenter((elem)=>{
      elem.target.style.color = "blue"
  }) 
  $("li").mouseleave((elem) => {
    elem.target.style.color = "black"
  })
  const btnTarea = document.getElementById("btn-tarea")
//   console.log(btnTarea)
  btnTarea.addEventListener("click", (event)=>{
    event = alert("click en el botón")
  })
$("#btn-tarea2").click(() => {
    console.log("Hola, estoy utilizando jQuery")
})