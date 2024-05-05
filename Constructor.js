//Funcion constructor de objetos de tipo Persona
function Persona(name, lastname, email){
    this.nombre = name;
    this.apellido = lastname;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log( padre );
console.log( padre.nombreCompleto() );

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log( madre );
console.log( madre.nombreCompleto() );

//Podemos cambiar valores
padre.nombre = 'Carlos';

console.log( padre );
console.log( madre );