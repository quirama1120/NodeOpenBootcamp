const compras = ["manzana", "pepino", "tomate", "arepas", "zanahorias"];
compras.push("aceite de girasol");
console.log(compras);
compras.pop(compras);
console.log(compras);
const peliculas = [
    {
  Titulo: "la lista de schindler",
  Director: "Steven Spielberg",
  año: 1993,
  
},
{
    Titulo: "el pianista",
    Director: "Roman Polanski",
    año: 2001,
},
{
    Titulo: "el señor de los anillos",
    Director: "Peter Jackson",
    año: 2001,
}];

const mayor2010 = peliculas.filter(peli => peli.año > 2010)
console.log(mayor2010)
const directores = peliculas.map(pelicula => pelicula.Director)
console.log(directores)
const titulos = peliculas.map(pelicula => pelicula.Titulo)
console.log(titulos)
const tituloDirector = peliculas.concat(directores,titulos)
console.log(tituloDirector)
const _tituloDirector = [...directores, ...titulos]
console.log(_tituloDirector)