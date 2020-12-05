/* Ejercicio 1 */

function TipoMotor() { 
    var motor;
    motor = prompt ('Introducir el tipo de motor (Valores posibles 0, 1, 2, 3, 4) : ');
    if (motor =="") { alert ('No se ha introducido ningún tipo de motor');
    }
    motor = Number(motor);
    switch (motor) {
        case 0: alert ("No hay establecido un valor definido para el tipo de bomba"); break;
        case 1: alert ("La bomba es una bomba de agua"); break;
        case 2: alert ("La bomba es una bomba de gasolina"); break;
        case 3: alert ("La bomba es una bomba de hormigón"); break;
        case 4: alert ("La bomba es una bomba de pasta alimenticia"); break;
        default: alert ("No existe un valor válido para tipo de bomba"); break;
    }
}
TipoMotor();

/* Ejercicio 2 */

var  numeroproducto;
var preciosiniva;



function calculoimpuesto(){

let  numeroproducto=parseInt(prompt("ingrese el numero de producto"));
let preciosiniva=parseInt(prompt("Ingrese el precio sin iva"));


if(numeroproducto==1){
    precioconiva=((preciosiniva*0.21));
    
    let total=(precioconiva)+(preciosiniva);
     
    console.log("el precio con iva es"+ total + "  "+"El precio sin iva es "+preciosiniva);
} else if(numeroproducto==2){
    precioconiva=((preciosiniva*0.10));
    let total=(precioconiva)+(preciosiniva);
    console.log("el precio con iva es"+ total+"   "+"El precio sin iva es "+preciosiniva);
   
}else if(numeroproducto==3){
    precioconiva=((preciosiniva*0.05));
    let total=(precioconiva)+(preciosiniva);
     
    console.log("el precio con iva es"+ total+  "   "+"El precio sin iva es "+preciosiniva);
}else{

console.log("Solo hay tres tipos de producto");
}


}


calculoimpuesto();
     
    