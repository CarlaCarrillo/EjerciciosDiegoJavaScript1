//Ejercicios:

//Convierte todos los ejercicios de la parte 1 a usar Promises

//[1]
[8, 5, 7, 10, 2, 6].forEach(v => console.log(v))//con callback
//convertido a promise
[8, 5, 7, 10, 2, 6].forEach(v => Promise.resolve(v).then(v => console.log(v)));


//[2]
let var1 = () => console.log('1')
setTimeout(var1,3000);

let var2 = () => console.log('2')
setTimeout(var2,1000);

let var3 = () => console.log('3')
setTimeout(var3,4000);


//[5]

let var1 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 1));
let var2 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 2));
let var3 = new Promise((resolve, reject) => setTimeout(resolve, 4000, 3));
Promise.all([ var1, var2, var3]);




//Crea una Cadena de Promesas en la cual una lanza un error (no hagas Catch)

//Agrega un catch al ejercicio anterior

//Agrega un finally al ejercicio anterior

//Crea una función con 3 promesas, que acaben a tiempos diferentes y regresa en cuanto la primera termina

//Crea una función con 4 promesas, que acaben a tiempos diferentes y regresa cuando todas acaben

//Crea una Cadena de Promesas en la cual una se rechaza, asegurate de agregar un catch

//Crea una Cadena de Promesas en la cual una se rechaza, agrega varios catch
