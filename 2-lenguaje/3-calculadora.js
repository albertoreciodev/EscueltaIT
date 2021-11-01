function suma() {
    /*
    var operando1;
    operando1 = document.getElementById('operando1').value;
    var operando2;
    operando2 = document.getElementById('operando2').value;
    var resultado;
    resultado = operando1 + operando2;
    document.getElementById('resultado').value = resultado;
    */
   var op1 = document.getElementById('operando1').value;
   var op2 = document.getElementById('operando2').value;
   var resultado = Number(op1) + Number(op2); // Funcion Number que es a convertir a un numero, si conserva decimales
   var resultado = parseInt(op1) + parseInt(op2); // Funcion Number que va intentar convertir lo que haya a un numero entero, no se conserva decimales
   if(isNaN(resultado)) {
       alert('Esa operacion no se puede realizar');
   } else {
       document.getElementById('resultado').value = resultado; // No aparece correcto la suma porque es un campo de texto y lo concatena los dos valores
   }
   //document.getElementById('resultado').value = resultado; // No aparece correcto la suma porque es un campo de texto y lo concatena los dos valores

}
document.getElementById('suma').addEventListener('click', suma);
