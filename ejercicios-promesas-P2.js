//Callbacks, Promesas y Async/Await:


/*let p1 = setTimeout(() => Promise.resolve(1), 1000);
//Imprime 1 en un segundo
let p2 = setTimeout(() => Promise.resolve(2), 2000);
let p3 = setTimeout(() => Promise.resolve(3), 3000);
let r = Promise.reject('ahh!'); // Crea una Promesa rechazada
let tr = setTimeout(Promise.reject('delay'), 1500);
Promise.all([ p2, p1, r, p3]) // Regresa Promesa rechazada con, no ejecuta ninguna de las otras
Promise.all([ p2, p1, tr, p3]) // Regresa Promesa rechazada con 'delay', ejecuta p1 y no las demás
Promise.all([ p3, p1, p2]) // Regresa Promesa con [ 3, 1, 2], el orden de ejecución fue p1, p2, p3
Promise.all([]) // Regresa Promesa resuelta con un arreglo vacío
Promise.race([p2, p3, p1]) // Regresa Promesa resuelta con 1, solo se ejecuta p1
Promise.race([p2, p3]) // Regresa Promesa resuelta con 2, solo se ejecuta p2

También exponen métodos estáticos para poder trabajar promesas:
all: Recibe un arreglo de promesas, regresa una promesa que continúa su ejecución cuando todas las promesas terminan
Si una es rechazada, regresa una promesa rechazada con esa razón de inmediato
race: Recibe un arreglo de promesas, regresa la primer promesa que resuelve del arreglo
resolve: Regresa una promesa que resuelve inmediatamente
reject: Regresa una promesa que se rechaza inmediatamente*/

/*EJERCICIO*/

//Explica la salida de las siguientes promesas:
Promise.resolve(1).then(v => v + 3).then(v => Promise.reject(v))
  .then(v => v * 3).catch(e => console.log(e));
//Promesa resuelta en 1
Promise.reject(2).then(v => v + 3).catch(e => e * 3).then(v => v - 1).then(v => console.log(v));
/*primera promesa rechazada, por lo que ya no pasa al then(v=>v+3), entra directo al catch con valor 2, 
lo multiplica por 3, se convierte en 6, pasa al v(v=>v-1) se convierte en 5 y se imprime en console.log*/
Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.reject(3), Promise.resolve(1)])
  .then(arr => console.log(arr)).catch(e => console.log(e));
/*Aquí promise.all rechaza la petición con el motivo pasado  por la primera  promesa que se rechaza
 (3),  y pasa al catch con el mismo valor*/ //3
Promise.race([Promise.resolve(1), Promise.reject(2), Promise.reject(3), Promise.resolve(1)])
  .then(v => console.log(v)).catch(e => console.log(e));
/*Promise.race regresa la primer promesa que recibe (1), después v toma el valor 1, lo imprime, es atrapado por el catch que
asiga a e el valor de 1 y lo imprime*/
Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3), Promise.resolve(1)])
  .then(arr => console.log(arr)).catch(arr => console.log(arr));
/*Aquí con promise.all la primera promesa en el arreglo será el primer elemento del array (1), la segunda
promesa sera el segundo elemento del arreglo (2) y así hasta acabar para imprimirlo// [1,2,3,1] */