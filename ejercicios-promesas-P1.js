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

//convertido a promise
let var1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 1));
let var2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 2));
let var3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 3));

Promise.all([ var3, var1, var2])


//[5]

Promise.resolve('first').then(firstValue => {
    Promise.resolve(`second, ${firstValue}`).then(secondValue =>{
        Promise.resolve(`third, (${secondValue}), ${firstValue}`).then(console.log);
    })
})

const asyncHell = asyn () => {
    const firstValue = await Promise.resolve(`second, ${firstValue}`);
    const secondValue = await Promise.resolve(`third, (${secondValue}), ${firstValue}`);
    console.log(thirdValue);
}
asyncHell();
//third, (second, first), first
//Promise {<resolved>:undefined}


//Crea una Cadena de Promesas en la cual una lanza un error (no hagas Catch)
Promise.resolve(2).then(v => v + 5).then(v => Promise.reject(console.log(v)));

//Agrega un catch al ejercicio anterior
Promise.resolve(2).then(v => v + 5).then(v => Promise.reject(v - 2)).catch(e => console.log(e));
//Agrega un finally al ejercicio anterior
Promise.resolve(2).then(v => v + 5).then(v => Promise.reject(v - 2)).catch(e => console.log(e)).finally(v => console.log(v));

//Crea una función con 3 promesas, que acaben a tiempos diferentes y regresa en cuanto la primera termina
function promesas() {
   
    let var1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 1));
    let var2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 2));
    let var3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 3));
    return Promise.race([var1,var2, var3]);
}
promesas().then((message) => console.log(message))

//es lo mismo, solo es con =>
let promesas = () => {
   
    let var1 = new Promise((resolve, reject) => setTimeout(resolve, 4000, 1));
    let var2 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 2));
    let var3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 3));
    return Promise.race([var1,var2, var3]);
}
promesas().then((message) => console.log(message))


//Crea una función con 4 promesas, que acaben a tiempos diferentes y regresa cuando todas acaben

let promesas = () => {
   
    let var1 = new Promise((resolve, reject) => setTimeout(resolve, 4000, 1));
    let var2 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 2));
    let var3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 3));
    return Promise.all([var1,var2, var3]);
}
promesas().then((message) => console.log(message))

//Crea una Cadena de Promesas en la cual una se rechaza, asegurate de agregar un catch
Promise.all([Promise.resolve('hola'), Promise.reject("¿cómo "), Promise.resolve('estas?')]).then((mensaje) => console.log(mensaje)).catch(e => console.log(e));

//Crea una Cadena de Promesas en la cual una se rechaza, agrega varios catch

Promise.all([Promise.resolve(5), Promise.resolve(v => (8)), Promise.reject(v => (v + 2))]).then(v => (v + 3)).catch(e => console.log(e)).then(v => (v*3)).then(v => (v + 3)).catch(e => console.log(e))