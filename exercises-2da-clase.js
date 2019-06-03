// [1]Escribe una función llamada calculateDogAge que reciba un número (la edad humana del perro) y calcule su edad en años de perro (edad x 7)
function calculateDogAge(){
let edadHumana = Number(window.prompt('Ingresa edad humana'));
dogAge = edadHumana * 7
alert("La edad del perro es " + dogAge );
}//en consola lo llamas con: calculateDogAge()


// [2]Escribe una función llamada getCandySupply que reciba dos números (edad, cantidad por día) y calcule cuantos dulces consumirías por el resto de tu vida.
//El resto de tu vida es definido por una edad constante (por ejemplo, 75 años)
function getCandySupply() {
  let cantidadDia = Number(window.prompt('Ingresa número de dulces que comes al día'));
  let edad = Number(window.prompt('Ingresa edad'));
cantidadDulces = (cantidadDia * 360) * edad;
alert("Cmerias " + cantidadDulces + " durante toda tu vida." );
}

// [3] Crea una función que permita encadenar llamadas
  // a().a().a() ... etc



// [4]Crea una función que recibe un tipo (formal/casual) y dos funciones, una para un saludo casual (hola!) y otra para un saludo formal (buenos dias)
// La función debe regresar el tipo de saludo que va a usarse


function saludoCasual(){
  alert("hola")
}
function saludoFormal(){
  alert("buenos días")
}
let tipo = window.prompt("ingresa tipo de saludo formal/casual");


function ingresaSaludo(tipo, saludoCasual, saludoFormal) {
  if (tipo === 'casual'){
      saludoCasual();
  } else {
      saludoFormal()
  }
};
ingresaSaludo(tipo, saludoCasual, saludoFormal);

// [5]Conviertan cualquier ciclo for que use un arreglo de la parte 1 para que use forEach o map






// [6.a]Explica cual es la salida de las siguientes funciones y porqué:

var a = 12;
(function() {
  alert(a);
})();
//Será 12 porque se está estableciendo que el valor a es igual a 12 y la function manda a llamar a "a"



//[6.b]
var a = 5;
(function() {
  var a = 12;
  alert(a);
})();
//sería 12 porque en la función la está redefiniendo y la alerta manda a llamar a esa "a"

//[6.c]
var a = 10;
var x = (function() {
  var a = 12;
  return (function() {
    alert(a);
  });
})();
x();
//Aquí sería 10 porque dentro de la función que contiene el alert NO está redefiniendo la variable "a"


//[6.d]
var a = 10;
var x = (function() {
  var y = function() {
    var a = 12;
  };
  return function() {
    alert(a);
  }
})();
x();
//Regresa 10 porque está regresando la function con la variable x y para esta function la var a = 10,
//cuando a es redefinida sólo es para la function de var y.

//[6.e]
var a = 10;
var x = (function() {
  (function() {
    a = 12;
  })();
  return (function() {
    alert(a);
  });
})();
x();
//sería 12 porque dentro de la function de x está redefiniendo el valor de a, así que cuando la llama
//su valor ya es 12

//[6.f]
var a = 10;
(function() {
  var a = 15;
  window.x = function() {
    alert(a);
  }
})();
x();
//sería 15 porque en el function se redefine el valor de a=15, window.x es igual a esa function y en el alert jala el
//valor de la a redefinida

//[6.g]
function leFunction() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
     return 2;
  }
}
leFunction();
//La a está declarada pero sigue estando indefinida
//Regresa el valor 2 porque el console.log llama a la función foo() cuyo return es 2

//[6.h]
/*var a = 1;
function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  a = 5;
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
*/

//[6.i]
var fullname = 'A Name';
var obj = {
  fullname: 'Full Name',
  prop: {
    fullname: 'Le Name',
    getFullname: function() {
      return this.fullname;
    }
  }
};
console.log(obj.prop.getFullname());//Le Name, llama a la función getFullname, regresando la propiedad fullname del objeto
var aCall = obj.prop.getFullname;//Aquí ya es un objeto global
console.log(aCall());//A Name, porque como se definió como variable global se llama al valor de la propiedad fullname que está hasta arriba
console.log(obj.fullname);//Full Name llamará al valor fullname del objeto



//[6.j]
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
//


/*
  Crea una clase persona que recibe un nombre, apellido y edad
  Agrega métodos para cambiar y obtener cada una de las propiedades
  Agrega un método (describe) que regrese una cadena como esta:
  {Nombre} {Apellido}, {edad} años.
*/

class persona {
  constructor(nombre, apellido, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
  }

  describe (){
    console.log(this.nombre + this.apellido + (this.edad + "años"))
  }
}


/*
  Crea una clase Product que recibe un nombre y un valor
  tiene un método (value) que regresa su valor con iva (x1.16)*/
class Product {
  constructor(nombre, valor){
    this.nombre = nombre
    this.valor = valor
  }
  get value(){
    return this.valor * 1.16
  } 
}

 /* Crea otra clase Cart que recibe un arreglo de Product
  tiene un método (add) que recibe un Product y lo agrega a su lista
  tiene un método (total) que regresa el total de todos los Product(con iva)
*/
class Cart {
  constructor(nombre,valor) {
    this.nombre = nombre
    this.valor = valor
  }
  get add(){
    
  }
  get total(){
    
  }
}







 /* Crea otra clase Food que hereda de product
  su método value regresa el valor sin iva
  Esta clase debería poder usarse en Cart
*/