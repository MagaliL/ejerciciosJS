//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa. 

//Variable
let numUser = prompt("Ingrese un número real: ");

// Verificar clase de número

if(numUser == 0){
    alert(`El número que usted ingreso es: cero`);

} else if(numUser > 0) {

    alert(`El número que usted ingreso, ${numUser}, es positivo`);

}else if (numUser < 0) {
    alert(`El número que usted ingreso, ${numUser}, es negativo`);

};