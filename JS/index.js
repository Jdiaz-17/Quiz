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

function obtenerValorConImpuestos(){
    var precio = prompt ('Introduzca el precio sin impuestos: ');
    var producto = prompt ('Introduzca el tipo de producto: ');
    precio = Number(precio);
    producto = Number(producto);
    if (isNaN (precio) || isNaN (producto)){
        alert ('El parametro introducido no es numerico');
    }
    else if (producto != 1 && producto !=2 && producto !=3){
        alert ('El producto introducido es incorrecto. Solo son válidos los valores numericos enteros');
    }
    else {obtenerImporteConImpuestos(precio,producto);}
    }
    
    function obtenerValorConImpuestos2(){
        var precio2 = prompt ('Introduzca el precio sin impuestos: ');
        precio2 = Number(precio2);
        if (isNaN (precio2)){
            alert ('El precio que acabo de introducir no es numérico');
        }
          else {
              obtenerImporteConImpuestos2(precio2);
           }
    }
    
    function obtenerImporteConImpuestos(precio,producto,impuesto) {
        switch (producto) {
            case 1:
            impuesto = Number(1.21);
            break;
    
            case 2:
            impuesto = Number(1.1);
            break;
    
            case 3:
            impuesto = Number(1.05);
            break;
    
            default:
            break;
        }
    
        alert ('Importe sin impuestos de ' + precio + ' y tipo de producto ' + producto + ' el resultado del importe con impuestos es de ' + precio*impuesto)
    
    }
    
    function obtenerImporteConImpuestos2(precio2){
        var resultado = [undefined, 121, 110, 105];
        alert ('resultado[0] = ' + resultado[0] + ', resultado[1] = ' + resultado[1] + ', resultado[2] = ' + resultado[2] + ', resultado[3] = ' + resultado[3] + '.')
        alert ('Importe sin impuestos de ' + precio2 + ' y tipo de producto 1 el importe es ' + precio2*resultado[2]/100 + ', si el producto es tipo 2 el importe es ' +  precio2*resultado[1]/100 + ' y si el producto es tipo 3 el importe es ' + precio2*resultado[3]/100 + '.');
    
    }
    obtenerImporteConImpuestos();
    obtenerImporteConImpuestos2();