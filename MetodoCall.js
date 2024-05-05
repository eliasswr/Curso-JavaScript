let persona1 = {
    nombre: 'Elias',
    apellido: 'Soraire',
    nombreCompleto: function(titulo, tel){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre: 'Jazmin',
    apellido: 'Gauna'
}

//Uso de call para usar el metodo persona1.nombreCompleto con los datos del persona2
console.log( persona1.nombreCompleto('Lic', '11223344') );

console.log(persona1.nombreCompleto.call( persona2, 'Ing', '44332211' ));