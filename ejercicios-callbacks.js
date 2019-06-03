//Recorre un arreglo usando un callback, imprime cada elemento

[8, 5, 7, 10, 2, 6].forEach(v => console.log(v))//esto es el callback

//es igual al de arriba (sólo tiene una presentación diferente)
var array = [8, 5, 7, 10, 2, 6];
array.forEach(function(element){ //esto es el callback
    console.log(element)
});

/*Haz varios callbacks de forma que se imprima:
1 después de 3 segundos
2 después de 1 segundo
3 después de 4 segundos
En consola debería verse 2 1 3
*/

//una forma de hacerlo
setTimeout(function() {
    console.log('1'); 
}, 3000);
setTimeout(function() {
    console.log('2'); 
}, 1000);
setTimeout(function() {
    console.log('3'); 
}, 4000);



//Otra forma de hacerlo
let var1 = () => console.log('1')
setTimeout(var1,3000);

let var2 = () => console.log('2')
setTimeout(var2,1000);

let var3 = () => console.log('3')
setTimeout(var3,4000);

//no sé si esté bien, pero esta es una forma más complicada de hacerlo
var myVar1 = [1];
var myVar2 = [2];
var myVar3 = [3];

function mainFunction(foo1, foo2, foo3) {
   
    myVar1.forEach(v => (v))
    setTimeout(foo1,3000);

    myVar2.forEach(v => (v))
    setTimeout(foo2,1000);

    myVar3.forEach(v => (v))
    setTimeout(foo3,4000);
}
   
function foo1() {
    console.log(myVar1);
    }
function foo2() {
    console.log(myVar2);
    }
function foo3 () {
    console.log(myVar3);
    }
    
mainFunction(foo1, foo2, foo3);


//Escribe un callback que recibe un argumento y lo imprime

//una forma de hacerlo
function mainFunction(callback) {
var name = prompt('Dame tu nombre');
callback(name);
}
function Saludo(name) {
    alert('Buenas tardes' + name)
};

//otra forma de hacerlo
function mainFunction(callback){
    alert('hago algo y llamo al callback avisando que terminé');
    callback('Miguel');
}
funcionPrincipal(function(name){
   alert('Buenas tardes ' + name);
});


//Crea una función que recibe el callback anterior y lo ejecuta
var arreglo = [9, 7, 4, 3];
var sumaArreglo = array.map(function(elemento) {
   return elemento * 2;
}); //  [2, 4, 8, 16]


//Crea una función que llama a un callback y usa el valor que regresa para llamar a otro. Después debe llamar a un tercer callback con el valor que regresa el segundo

function saludar(callback) {
	let menssage = 'Hola  a todos'
	callback(menssage)
}

saludar(function(str) {
	console.log('Se está llamando al callback')
	console.log(str)
})

saludar(function(str) {
	str = 'Hola a todos de nuevo(se cambia el parametro)'
	console.log('Se esta llamando a otro callback')
	console.log(str)
})


  //otra forma
let suma = (a) => (b) => (c) => a + b + c
suma(2)(4)(7);