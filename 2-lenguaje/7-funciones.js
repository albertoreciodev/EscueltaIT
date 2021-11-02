// Las funciones sirven para colocar un pedazo de codigo que yo voy a poder invocar un numero de veces que sea necesaria 
// y que se pueda reutilizar 

// Declarar una función
function colorear() {
    document.bgColor = '#339999';
}

colorear();


// Paso de parametros en las funciones
// Los () pueden estar vacios o no, y sirven para indicar los parametros que esperamos que una funcion vaya a recibir y los parametros son todos aquellos datos con los cuales yo quiero trabajar dentro de la funcion para hacer cosas con ellos
function colorearColor (color) {
    document.bgColor = color;
}

colorearColor('yellow');
/*
Esto lo que va a hacer es que va a colorear de color amarillo, lo que hara sera que yellow se carga como valor en color (de la function colorearColor(color)) y dentro de esta funcion, color es como si fuese una variable que tiene el valor que yo le he pasado por el parametro (que es yellow)
*/

/***Los objetos son agrupaciones entre variables y funciones, muy esquematica y resumida, agrupan en una misma herramienta tanto valores de variables o atributos como funciones. Entonces cuando yo estoy hablando de una funcion asociada a un objeto le llamo con el nombre de metodo y cuando yo tengo una funcion tal cual, que no depende de ningun objeto, le llamo función
***/


// Valores de retorno
function pideNumero() {
    var numero;
    do {
        numero = prompt('Dame un número', '');
        numero = Number(numero);
    } while (isNaN(numero));
    return numero; // devuelvo un valor
}
// Esta funcion lo que va a hacer va ser devolver un numero cuando realmente tenga un numero, primero declaro una variable numero que no le estoy asignando ningun valor, utilizo el bucle do while porque no se el numero de veces que tengo que pedir hasta que el usuario me introduce un numero y como se que tengo por lo menos pedirlo una vez una unica vez, una o mas veces, lo que hago es el do while que me sirve para ejecutar las cosas por lo menos una vez y luego preguntar si lo que he ejecutado, ha tenido buen resultado.
//Pregunto al usuario para que me de un numero y luego lo que hago es convertir el numero (de la variable) a un valor numerico, al convertir un numero a un valor numerico puede suceder dos cosas, si es un valor numerico realmente, esa conversion me ira bien y lo que tendre en la variable numero sera un valor numerico, o sea un numero pero si lo que tenia aqui (en numero) al hacer el promp, no es un valor numerico, al intentar convertirlo a number lo que va a devolver va a ser isNaN, despues le voy a preguntar si mientras que sea un no numero lo que yo tengo en la variable numero,  este bucle se va a ejecutar un numero indeterminado de veces hasta que el numero realmente no sea un no numero, hasta que sea un numero de verdad y luego al final lo que hago es devolver ese valor numerico con return que la funcion necesita devolver.

var miNumero = pideNumero();
console.log(miNumero);




// Otro ejemplo con if
function pideNumero() {
    var numero;
    do {
        numero = prompt('Dame un número', '');
        numero = Number(numero);
        if(numero > 1000) {
            return 'kk'; // Cuando hago un return lo que ocurre es que el valor se devuelve y en ese preciso instante que hemos hecho un retorn, sale de la funcion
        }
    } while (isNaN(numero));
    return numero; // devuelvo un valor
}
var miNumero = pideNumero();
console.log(miNumero);


// Como podria hacer, si tengo un array y quiero saber el maximo y el minimo de un array de valores numericos (me estan pidiendo dos cosas, que la funcion devuelva dos cosas), entonces ahi te tienes que buscar la vida y utilizar algun tipo de estructura de datos que no valdria una variable porque una variable te guarda un valor que te permitiese guardar dos cosas, generalmente en Javascript seria devolver un objeto que tiene las propiedades min y max, con los dos valores que quieres devolver, eso lo veremos mas adelante.





/* Exiten parametros por referencia ? minuto 1h 35min
En Javascript se pasan por valor y no existe la posiblidad de pasar por referencia
*/

function referencia(valor) {
    valor = 55;
}

var x = 11;
referencia(x);
console.log(x);



// Ambito de las variables
/***


 *****/

function ambito() {
    var local = 33;
}

ambito();
console.log(local); // Aqui da error porque local es un ambito de la funcion, no global

// Si no declaras la variable es un ambito global
// ************** IMPORTANTE Declaras una variable, si no existia, se crea automaticamente, puede surgin el siguiente problema que si no colocamos var aqui (var local = 33;) dentro de la función ambito, una variable que se utiliza pero no se ha llegado a declarar, siempre se declara con un ambito global y puede colisionar con otras variables que haya.
//Piensas que solo existe dentro de la funcion pero la estas declarando globalmente si no pones var y puede estar colisionando

var local = 44;
function ambito() {
    local = 33;
}

ambito();
console.log(local); // Aqui da el resultado 33


/************* GIT
 * $ git version
    devuelve la version instalada----git version 2.33.1.windows.1

    configurar para poner nuestro nombre y email
    git config --global user.name "Alberto Recio"

    git config --global user.email "albertoreciodev@gmail.com"

    user.name=albertoreciodev
    user.email=albertoreciodev@gmail.com

    para ver como lo tenemos configurados
    git config --list

    para hacer que nuestro repositorio(carpeta donde tenemos nuestros archivos) se convierta en un repositorio manejado por git
    git init

    creamos un archivo secreto.txt y no queremos que git lo coja
    touch secreto.txt
    .gitignore ---->creamos un archivo y dentro ponemos secreto.txt    *.txt o secreto/* para todo el directorio

    para ver el estado de nuestros archivos
    git status

    si queremos añadir los archivos en el Staging Area (que es la fase/estado intermedio antes del repositorio)
    git add - A ---> lo de -A significa que añadira todos los archivos que hay

    si quiero que un archivo no este en el Staging Area o lo añadi por error
    git rm --cached .gitignore

    lo agregamos nuevamente
    git add .gitignore

    ahora vamos a comitear que es agregar un comentario, logearte y agregar los archivos en el repositorio         la m es de mensaje
    git commit -m "Agregando mis primeros archivos"

    si hacemos un git status ya no tendremos ningun archivo porque estan en el repositorio

    Con el git log podemos el historial de todos los commits que hay en este repositorio
    git log


    -**-*- la segunda forma de manejar un repositorio es un repositorio que ya exista, un repositorio que alguien ya creo, que tiene commits y vos lo que vas a hacer, es a empezar a desarrollar en ese codigo que ya esta empezado
    Con git clone, lo que hace es descargar el codigo de un repositorio externo y lo baja en tu maquina para que pueda trabajar en eso, obviamente mantiene todo el historial que ha sido modificado de antes
    git clone https://github.com/albertoreciodev/escueltait.git
 * 
 * Si hacemos git log podremos ver los commits que tenia ese repositorio
 * creamos un archivo y si hacemos git status, veremos que ese nuevo archivo, no esta en el Staging Area, esta en el working directory, esta en rojo pero ve que hay un cambio
 * 
 * git diff    ------> Muestra las diferencias de lo que esta en el repositorio de lo que esta en tu maquina, esto esta muy bien para ver cuales son los cambios que has hecho en el archivo-------------------------------------------------------
 * 
 * Ahora lo que se hace es añadir estos archivos en el Staging Area
 * git add - A ------> Lo de -A significa que añadira todos los archivos que hay
 * git add index.html -----> Si ponemos el nombre del archivo, añadirá nada mas este archivo
 * 
 * Y ahora agregamos el commit con mensaje en el Staging Area
 * git commit -m "Agregando codigo a index.html"
 * 
 * Si hacemos log, nos va a mostrar el último cambio que acabamos de hacer
 * git log
 * 
 * Ahora vamos a subir todo el código o nuevo código al repositorio
 * git push origin master
 * 
 * Como descargar la última versión del código? Con git pull
 * git pull origin master
 * 
 * Con git push, subimos el código y con git pull, descargamos el código.
 * 
 * 
 * 
 * 
 * 
 * 
 * Como es el workflow para trabajar con compañeros en un equipo con GIT? Siempre es mejor crear una branch (crear una rama del código). De esta forma, es como si haces un camino donde uno empieza a trabajar y luego se puede juntar esta branch (rama) con la master (la principal). ES UNA MALA PRÁCTICA E IDEA MODIFICAR MASTER. De esta manera al crear una branch, todo el mundo puede ver que cambios he hecho, lo aceptan, lo añaden a la branch master y después se bajan la nueva versión.
 * 
 * Creamos una nueva branch en mi máquina
 * git branch minuevafeature
 * 
 * Y después, tenemos que pasarnos a esa branch, cambiarnos a esta branch (a esta nueva rama)
 * git checkout minuevafeature
 * 
 * Si hacemos una git status, nos dira----->On branch minuevafeature
 * 
 * Si hacemos git branch, veremos todas las branchs que estan en mi máquina y esta marcada con un asterisco en la branch que estamos
 *        master
 *      * minuevafeature
 * 
 * Hemos modificado el archivo index.html, agregamos el archivo con git add -A y hacemos un commit con git commit -m "Agregando más código a index.html"
 * 
 * Y ahora lo que hacemos es un push
 * git push -u origin minuevafeature
 * Esto lo que va a decir a mi copia local de GIT, que hay una branch que va estar en el repositorio (externo) del servidor que va a estar linkeada con mi branch en mi local
 * 
 * Si hacemos un git log, vamos a ver el último commit que hice y nosotros seguimos en esta branch (rama) minuevafeature
 * git log
 * 
 * Para poder ver todas las branchs (ramas) locales y remotas del servidor se utiliza el comando
 * git branch -a
 * 
 * Ahora que tenemos nuestro código subido, es unir nuestra branch (minuevafeature) a master para que cuando uno persona se descargue master tenga todo el código, incluido lo que acabamos de agregar.
 * Tenemos que pasarnos nuevamente a la branch master
 * git checkout master
 * Tenemos que hacer un git pull para asegurarnos de tener la última versión del código
 * git pull origin master
 * Con este comando, nos muestra las branchs que hemos mergeado hasta ahora, nada mas nos aparecerá master porque todavía no hemos mergeado la branch minuevafeature que acabamos de crear
 * git branch --merged
 * Ahora tenemos que mergear nuestra branch minuevafeature con master
 * git merge minuevafeature
 * Y lo que hace, es añadir los cambios a la branch master
 * 
 * Actualmente tenemos todo el código en la branch master pero todavía esta en nuestra máquina, no esta subido al servidor, ahora vamos a subir nuestra branch master al servidor para que otra persona se lo pueda descargar y tenga el mismo código
 * git push origin master
 * 
 * 
 * Una buena práctica es eliminar las branchs que no vamos a utilizar mas
 * git push origin --delete minuevafeature      --->Se elimina la branch del repositorio del servidor
 * 
 * Si hacemos git branch -a, vemos que todavía esta en nuestra máquina la branch minuevafeature y para borrarla es
 * git branch -d minuevafeature
 * 
 * 
 * 
 * Resumen
 * git checkout master                          ---> Pasarnos a la branch master
 * git pull origin master                       ---> Aqui nos aseguramos que tenemos la última versión del código
 * git branch otrafeature                       ---> Creamos una nueva branch con el nombre de otrafeature
 * git checkout otrafeature                     ---> Nos pasamos a la nueva branch
 * Modificamos el código del index.html por ejemplo
 * git add -A                                   ---> Agregamos el archivo index.html al Staging Area
 * git commit -m "Agregando la ultima linea"    ---> Hacemos un commit con mensaje en el Staging Area
 * git push origin otrafeature                  ---> Subimos la branch otrafeature al repositorio del servidor
 * git checkout master                          ---> Nos pasamos a la branch master
 * git branch --merged                          ---> Para ver si esta nuestra branch mergeada, obviamente no va a estar (aparecerá *master)
 * git merge otrafeature                        ---> Añadimos los cambios de index.html a la branch master
 * git push origin master                       ---> Subimos la versión master al repositorio con mi nuevo código de la branch otrafeature
 * 
 * 
 */                                


    function suma() {
        var op1 = document.getElementById('operando1').value;
        var op2 = document.getElementById('operando2').value;
        var resultado = Number(op1) + Number(op2);
        var resultado = parseInt(op1) + parseInt(op2); //Convertir a un numero entero no hace decimales
        if(isNaN(resultado)) {
            alert ('Esa operacion no se puede...')
        } else {
            document.getElementById('resultado').value = resultado;
        }

        
    }
    document.getElementById('suma').addEventListener('click', suma);



    //condicionales
    //promp / escribir una entrada de datos y colocar un valor por defecto no se utiliza mucho, siempre mas los formularios

    var nombre = prompt('Dime tu nombre', 'Miguel');
console.log(nombre);

    if(nombre == 'Miguel') {
        alert('Bienvenido Miguel');
    } else {
        alert('No te conozco, pero bienvenido también');
    }


//bucles for


var i;
for( i = 1; i <= 10; i++) {
    document.write('<p>' + i + '</p>');
}

for(var j = 100; j >= 1; j -= 2) {
    document.write('<p>' + i + '</p>');
    /***
    if(j == 50) {
        break;
    }
    ****/
   if(j % 3 ==0) {
    document.write('<p style="color:red;">' + i + '</p>');
   } else {
    document.write('<p">' + i + '</p>');
   }
} 


//do while

var nombre = '';
while (nombre != 'Miguel') { //mientras el nombre sea distinto de miguel
    nombre = prompt('Dime tu nombre', 'Miguel');
}
alert('Bienvenido!!');


var nombre;
do {
    nombre = prompt('Dime tu nombre', 'Miguel');
} while (nombre != 'Miguel');
alert('Bienvenido 2!!');




/* Sintaxis de objetos

Acceso a una propiedad
Que son propiedades? Son como variables que tienen los objetos y que yo soy capaz de manipularlas y cambiar cosas
Como se accede a las propiedades? Tenemos un objeto, document es un objeto, es uno de los objetos principales que sirven de raiz a todo el modelo de objetos que estan dentro del documento, cualquier cosa que apareze en la pagina, cuelga del objeto document y dentro del objeto document, directamente hay una propiedad (como una variable) que se llama bgColor 
document.bgColor = 'red'
Luego dentro del documento, existen propiedades que cuelgan directamente del documento y tambien cuelgan otros objetos o otros arrays, por ejemplo esta el array de forms. Con forms, tengo acceso a todos los formularios que cuelgan de un documento
Con [0] accedo al primer formulario que haya en la pagina si por ejemplo hay 5, accederemos al primero
document.forms[0].action  // Con .action accedemos a la propiedad del formulario 0, el primer formulario que aparece en la pagina
document.forms[0].campo.value


Acceso a un método
Es exactamente lo mismo, lo que pasa es que los métodos, en vez de ser como variables que estan asociadas a un objeto, son como funciones que estan asociadas a un objeto y hacen alguna funcionalidad que le pertenezca a un objeto
Por ejemplo, en un documento, puedo pedir crear un elemento
document.body.createElement('p');
document.body.appendChlid(nuevoParrafo);


Los metodos son funciones que estan asociadas a los objetos


Curso de Javascript práctico para el desarrollo web 
curso hecho en el 03/05/2017
https://escuela.it/cursos/curso-practico-javascript-desarrollo-web

https://developer.paypal.com/docs/business/
https://developer.paypal.com/docs/api/overview/

*/