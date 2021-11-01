
// Un array en Javascript se declara de esta manera
var numeros = [3, 5, 2, 10, 66];

// Colocamos los valores de nuestro array entre corchetes y separados por comas, esto lo que hace es que estoy creando una variable pero en vez de tener un único valor, es como una variable que tiene un monton de posiciones y cada posición tiene un valor distinto, es como un casillero donde puedo guardar cosas en distintos compartimientos

// Manejar los recorridos en un array
function sumatorio(vector) {
    var sum = 0;
    for(var i = 0; i < vector.length; i++) {
        sum += vector[i];  // Cuando quiero acceder a una posición en concreto del array, utilizo las sintaxis de los corchetes y dentro de los corchetes, indico el índice de la posición que quiero acceder. Como este recorrido estamos incrementando de uno a uno, valores en la variable i, la i es la que estamos utilizando como indice para acceder a las posiciones del array.
    }
    return sum;
}
console.log (sumatorio(numeros));


// Mismo ejemplo con otro modelo del bucle for y mas útil
// El bucle for in lo que hace es que él mismo ya es suficientemente inteligente para saber que la variable i, tiene que tener el número de valores, que tiene que repetirse un número de veces, tantas veces como posiciones haya en vector.
function sumatorio(vector) {
    var sum = 0;
    for(i in vector) {
        sum += vector[i];
    }
    return sum;
}
console.log (sumatorio(numeros));





// Que pasaria si tenemos un cadena de texto en medio del array?
// Da un resultado que uno no quiere ---> 20x40
var numeros = [3, 5, 2, 10, 'x', 40];

// OLD
function sumatorio(vector) {
    var sum = 0;
    for(i in vector) {
        sum += vector[i];
    }
    return sum;
}
console.log (sumatorio(numeros));

// NEW para tratar la cadena de texto
// NEW para tratar la cadena de texto y no sumará si encuentra una cadena de texto, va a hacer la suma de los valores sin tener en cuenta aquellos que no tenga valor númerico

function sumatorio(vector) {
    var sum = 0;
    for(i in vector) {
        var valor = vector[i];
        if(typeof valor == 'number') {
            sum += vector[i];
        } else {
            return 'Upppsssss'; // No se puede procesar
        }        
    }
    return sum;
}
console.log (sumatorio(numeros));

// NEW para tratar la cadena de texto y nada mas sumará los valores númericos y de la cadena de texto, pasará
function sumatorio(vector) {
    var sum = 0;
    for(i in vector) {
        var valor = vector[i];
        if(typeof valor == 'number') {
            sum += vector[i];
        }    
    }
    return sum;
}
console.log (sumatorio(numeros));

