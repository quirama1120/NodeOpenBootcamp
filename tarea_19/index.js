const puzzleSection = document.querySelectorAll(".col");
const piezasInd = document.querySelectorAll(".imgInd");

piezasInd.forEach((img) => {
  img.addEventListener("dragstart", (event) => {
    img.classList.add("dragging");
    event.dataTransfer.setData("id", img.id);
  });
  img.addEventListener("dragend", () => {
    img.classList.remove("dragging");
  });
});

puzzleSection.forEach((section) => {
  section.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  section.addEventListener("drop", (event) => {
    const id_img = event.dataTransfer.getData("id");
    const img = document.getElementById(id_img);
    section.appendChild(img);
  });

});


