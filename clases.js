class Persona{
    constructor(name, lastname){//parametros
        this.nombre = name; 
        this.apellido = lastname;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log( persona1 );

let persona2 = new Persona('Carlos', 'Lara');
console.log( persona2 );