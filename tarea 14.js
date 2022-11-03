class Estudiante {
    constructor(nombre, asignaturas) {
        this.nombre = nombre;
        this.asignaturas = asignaturas
    }
    obtenDatos() {
        console.log("soy el mensaje del estudiante")
        return {nombre: this.nombre, asignaturas: this.asignaturas }
        
    }
}
class Dev extends Estudiante {
    constructor(nombre, asignaturas, especialidad) {
        super(nombre, asignaturas)
        this.especialidad = especialidad;
    }
    obtenDatos() {
        super.obtenDatos()
        console.log("y yo soy el mensaje del Dev")
    }
    }

const estudiante1 = new Estudiante("fernandiño", "javascript, HTML, CSS")
console.log(estudiante1)
estudiante1.obtenDatos()
const estudiante2 = new Dev("el toro", "c++,node,c#", "backend")
console.log(estudiante2)
estudiante2.obtenDatos()
