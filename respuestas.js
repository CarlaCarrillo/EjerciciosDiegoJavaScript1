//(1)Imprime la fecha actual
var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var f=new Date();
document.write(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

// (2)Obten el área de un triángulo. Pidele los 3 lados al 

function calculaPerim(){
var textResultado = document.getElementById("textperim");
var a = parseInt(document.getElementById("lado1").value);
var b = parseInt(document.getElementById("lado2").value);
var c = parseInt(document.getElementById("lado2").value);

 var perim = a + b + c;

textResultado.value = perim;

}

//(3) Voltea una string dada por el usuario 
function invertir_text(texto) { 
    return texto.split('').reverse().join('')
}

function reverse() {

    var invertir = String(window.prompt('ingresa palabra'));
    var rvs = invertir.split("");
    alert(rvs.reverse(invertir).join(""));

}


// (4)Voltea una string dada por el usuario sin usar el método de reverse
function manejainvertir() {
    var cadena = document.getElementById('palabrainv').value;
    var resultado = invertir(cadena); //resultado será el de la función invertir
    document.getElementById("resultadoinvertir").innerHTML = resultado; //lo imprimirá en mi cajita con el id"resultado invertir"
}

function invertir(cadena) {
	
	var x = cadena.length;
	var cadenaInvertida = "";
	while (x>=0) {
		cadenaInvertida = cadenaInvertida + cadena.charAt(x);
		x--;
	}
	
	return cadenaInvertida;
}
//Con las siguientes líneas le puedo agregar directamente en servidor los inputs
//cadena = String(window.prompt('ingresa cadena invertida'));
//alert("La cadena " + cadena + " invertida es " + invertir(cadena));



//(5)Convierte una temperatura dada en C o F a F o C, respectivamente
//esta función es jalada desde el html
function convertir(degree) {
    var x;
    if (degree == "C") {
      x = document.getElementById("c").value * 9 / 5 + 32;
      document.getElementById("f").value = Math.round(x);
    } else {
      x = (document.getElementById("f").value -32) * 5 / 9;
      document.getElementById("c").value = Math.round(x);
    }
  }
  //otras funciones de conversión pero no las use
  function cToF(celsius) 
{
  const cTemp = celsius;
  const cToFahr = (cTemp * 9 / 5) + 32;
  const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
}

function fToC(fahrenheit) 
{
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) * 5 / 9;
  const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
} 
cToF(60);
fToC(45);

//Crea un objeto que tenga una propiedad cuyo nombre es definido por el usuario. Su valor debe ser verdadero

object  = {};
varobject =String(window.prompt('INGRESA PALABRA'));
Object.defineProperty(object,varobject, {
value: true});
//lo llamo con object.la palabra que metí y me arroja true

// Realiza la suma de los valores que da el usuario hasta recibir un valor negativo
var suma = 0;
var i = 0;
do  { 
  i = Number(window.prompt("Dime un número"));
  suma = suma + i;
} while (i>0)
   alert('La suma es '+ suma +' ...saliendo');

//ejemplo sólo ingresando dos números

//var n1 = prompt("Dime un numero");
//   var n2 = prompt("Dime otro numero");
//    var suma = parseInt(n1)+parseInt(n2);
//    document.write(suma);
//    if (suma > 0)
//        alert("La suma de "+ n1 + " y "+ n2 + " es: " + suma + "y es positiva");
//    else if (suma < 0)
//        alert(" y es negativa");

//


//Convierte a mayúscula la primer letra de cada palabra en una cadena dada por el usuario
String(window.prompt('Ingresa oración en minúsculas')).replace(/\b\w/g, l => l.toUpperCase());


//Revisa si un número dado es múltiplo de 3 o de 7
var numero = Number(window.prompt('Ingresa número'));  
var resto3 = numero % 3;  
var resto7 = numero % 7;

  if ( resto3 == 0 ){
    alert("es multiplo de 3");
  } else if ( resto3 !== 0) { 
        if ( resto7 == 0){
      alert("es multiplo de 7")
      } else if (resto7 !== 0){
        alert('No es múltiplo de 5 ni de 7')
      }
    } 
  //Otra opción
  var numero = Number(window.prompt("escribe un número"));
    if(numero % 3 == 0) {
      alert(numero + ' es múltiplo de 3');
    } else if (numero % 7 == 0) {
      alert(numero + ' es múltiplo de 7');
    } else {
      alert(numero + ' no es múltiplo de 3 o 7');
    }

//Revisa cuantas veces se repite un caracter dado en una cadena dada
var cadena = String(window.prompt('Ingresa oración'));
cadena.split("a").length-1

//Revisa cuantas veces se repite un valor dado en un arreglo

var elementos = [1,1,3,5,6,4,9,5,3,5,7,9,0,1];
var repetidos = [];
var temporal = [];

elementos.forEach((value,index)=>{
temporal = Object.assign([],elementos); //Copiando el elemento
temporal.splice(index,1); //Se elimina el elemento que se compara
  
  if(temporal.indexOf(value)!=-1 && repetidos.indexOf(value)==-1)repetidos.push(value);
});//Se busca en temporal el elemento, y en repetido para ver si esta ingresado el array. indexOf return a -1 si el elemento no se encuetra

alert("los números que se repiten son_" + repetidos);

//otra manera de hacer lo de arriba pero con texto
var arreglo = ['Perro', 'Gato', 'Perro', 'Leon', 'Leon', 'Gato', 'Zorro', 'Gato'];
var arrBuscar = 'Gato';
var cantidad = 0;

for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === arrBuscar) cantidad ++; 
}
 alert ("Existen " + cantidad + " Gatos");

// [ ]Regresa todos los caracteres que no sean letras de una cadena

var stringIngresado = String(window.prompt('Ingresa string'));
var strinNogletra = [];
var Regetz = /[A-Za-z]/

for(var i = 0; i < stringIngresado.length; i++) {
  if(!stringIngresado[i].match(Regetz)) {
    stringNoletra.push( stringIngresado[i] );
  }
}
alert ("Estas carácteres" + strinNogletra.join("") + "no son letras");


// Haz una función que lanza un error con el mensaje dado por el usuario

  var err = new Error();
  err.name = String(window.prompt('Ingresa mensaje de error'));
  
  function checkNumber( my_string ){
    if( parseFloat( my_string )  != my_string ){
      err.message = my_string + ' is not a number. ';
      throw ( console.dir( err ) );
    }
    console.log( my_string + ' is a number!' );
    return true;
  }
  

// Extiende la función anterior para atrapar el error e imprimir su mensaje y stack

var numero = Number(window.prompt('Ingresa número'));  
var resto3 = numero % 3;  
var resto7 = numero % 7;

  if ( resto3 == 0 ){
    alert("es multiplo de 3");
  } else if ( resto3 !== 0)  { 
        if ( resto7 == 0){
      alert("es multiplo de 7")
      } else if (resto7 !== 0){
        throw console.error( 'Error: Número no múltiplo de 3 o 7!' )//Aquí se agrega el mensaje de error
      }
    } 

// Suma los contenidos de un arreglo de números
// Regresa un arreglo nuevo con el cuadrado de cada valor del arreglo original
// Regresa que tipo de ángulo es el dado
/*
  Agudo: 0 a 90 grados
  Recto: 90 grados
  Obtuso: 90 a 180 grados
  Llano: 180 grados
*/
// Regresa un arreglo nuevo sin los valores repetidos de un arreglo original
// Quita los valores repetidos de un arreglo (sin usar otro arreglo)
// Convierte un número binario dado por el usuario a decimal
// Convierte un número decimal dado por el usuario a binario, octal y hexadecimal (bases 2, 8 y 16)
// Regresa la cantidad de valores que comparten dos arreglos diferentes
// Valida que una cadena dada no tenga espacios en blanco
// Dada una cadena, determina su valor de scrabble
/*
  1: E, A, I, O, N, R, T, L, S, U
  2: D, G
  3: B, C, M, P
  4: F, H, V, W, Y
  5: K
  8: J, X
  10: Q, Z
*/
// Determina si una cadena dada por el usuario es un acrónimo
// Implementa una lista ligada
// Implementa una lista doblemente ligada
// Obten el Máximo común divisor de dos números dados