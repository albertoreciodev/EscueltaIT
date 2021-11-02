// Estructura de control para hacer una repeticion
for(var i = 1; i <= 10; i++) {
    document.write('<p>' + i + '</p>');
}

for(var j = 100; i >= 1; i--) {
    document.write('<p>' + j + '</p>');
    /*
    if(j == 50) {
        break; //Si llegas a 50, te paras
    }
    */

    if(j <= 50 && j >= 20) { // Operador &&  -->sirve para decir que se tiene que cumplir la primera opción y la segunda, las dos partes del operador
        continue; // Se sale de la iteración actual, no se sale del bucle como el break. El resultado muestra que llega al 52 y después salta al 18
    }


    //Quiero que los parrafos sean divisibles por 3 y que aparezcan de color rojo
    if(j % 3 == 0) { //Resto de la division y lo que devuelve es el resto
        document.write('<p style="color: red">' + j + '</p>');
    } else {
        document.write('<p>' + j + '</p>');
    }

}