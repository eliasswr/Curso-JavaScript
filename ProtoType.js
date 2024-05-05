//Funcion constructor de objetos de tipo Persona
function Persona(name, lastname, email){
    this.nombre = name;
    this.apellido = lastname;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//El prototype sirve para modificar los metodos y atributos de un objeto
Persona.prototype.tel = '44332211';

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
padre.tel = '12345678'
console.log( padre.tel );

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log( madre.tel );