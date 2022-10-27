const yo = {
  nombre: "Christian",
  apellido: "Quirama Hernández",
  edad: 27,
  altura: 1.78,
  desarrollador: true,
};
const edad = yo.edad;
console.log(edad);
const newList = [
  yo,
  {
    nombre: "Sebastian",
    apellido: "Gomez Cifuentes",
    edad: 26,
    altura: 1.78,
    desarrollador: true,
  },
  {
    nombre: "Juan David",
    apellido: "Bustamante Angel",
    edad: 25,
    altura: 1.78,
    desarrollador: false,
  },
];
console.log(newList)
newList.sort((a,b) =>  b.edad - a.edad)
console.log(newList)
