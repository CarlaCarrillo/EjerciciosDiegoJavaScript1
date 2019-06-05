// Para todos los ejercicios, si no se especifica que se espera que haga un listener, asuman que debe imprimir algo
 window.onload = () => {
  // Agrega contenido a div1 (ejemplo: 'I am a div!')
document.querySelector('#div1').innerText='El perro (Canis lupus familiaris),llamado perro doméstico o can​ y coloquialmente chucho​ o tuso,​ y también choco;​ es un mamífero carnívoro de la familia de los cánidos, que constituye una subespecie del lobo (Canis lupus).'

  // Agrega contenido al span de div2 (ejemplo: 'I am a span!')
document.querySelector('#div2 .a-span').innerText= 'Su tamaño o talla, su forma y pelaje es muy diverso según la raza. '
  
// Agrega un listener de click al boton de div3, el listener debe imprimir algo (ejemplo: 'I was clicked')              
document.querySelector('#div3 .a-button').addEventListener('click',() => alert('hola'))

// Agrega un listener de click al boton de div4, no dejes que haga el submit e imprime 'Default prevented'
/*document.querySelector('#div4 .a-button').addEventListener('click',(event) => {
  event.preventDefault();
  alert('Default prevented')
}) */
//es lo mismo que arriba pero sin flechita =>
document.querySelector('#div4 .a-button').addEventListener('click',function (event) {
  event.preventDefault();
  alert('Default prevented')
}) 

// Agrega un listener de click a div5, imprime el target del evento
document.querySelector('#div5 .a-span').addEventListener('click', (event) => alert(event.target));

// Agrega un listener de click al span de div6 y a la div6, imprime el target del evento en ambos y si es el listener de div o de span

document.querySelector('#div6').addEventListener('click', (event) => {
  alert(`listener de div ${event.target}`)});

document.querySelector('#div6 .a-span').addEventListener('click', (event) => {
  alert(`listener de div ${event.target}`)});

// Agrega un listener de click al span de div7 y a la div7, imprime el target del evento en ambos y si es el listener de div o de span, evita que el click del span se propague

document.querySelector('#div7').addEventListener('click', (event) => {
  alert(`listener de div ${event.target}`)});

document.querySelector('#div7 .a-span').addEventListener('click', (event) => {
  event.stopPropagation();//se agrega stopPropagation para evitar que el click se propague
  alert(`listener de span ${event.target}`)})  

// Selecciona los spans de div8, agrega el numero que son como contenido a cada una (1-6)
document.querySelectorAll('#div8 .a-span').forEach((numberSpan, i) => numberSpan.innerText = i + 1)//textcontent es si lo consideramos como un nodo
//con el querySelectorAll hago un arreglo de nodos y con el forEach puedo pasar uno por uno

// Agrega un listener de click al primer y ultimo span de div9
document.querySelector('#div9 .a-span').addEventListener('click',() => alert('Soy el primer span'));
document.querySelector('#div9 .a-span:last-of-type').addEventListener('click',() => alert('Soy el ultimo span'));

// Agrega un listener de click a los spans impares de div10 (1, 3, 5)
document.querySelectorAll('#div10 .a-span:nth-child(2n+1)').forEach((posicion) => posicion.addEventListener('click', () => alert('soy span')));

// Agrega otro span a div11, con 'not-a-span' como clase y 'Not a span!' como contenido
var noSpan = document.createElement('span');
noSpan.innerHTML='Not a span'
noSpan.className ='not-a-span'
document.querySelector('#div11').appendChild(noSpan);


// Cambia el src de la imagen de div12 a dogge.jpg (adjunto)
document.querySelector("div12").setAttribute("src", "dogge.jpg");

// Pon 'THE-span' como id del span de div13
/**
   * Agrega listeners a los 3 inputs de div14.
   * change para changeInput
   * blur para blurInput
   * ambos para bothInput
   *
   * Los listeners deben imprimir el nombre del target del evento
   */
/**
   * Agrega un listener al span de div15 que, cuando el mouse pase por encima,
   * cambie el texto a 'I am being hovered'.
   * Debe volver al texto original cuando el mouse deje de estar encima.
   */
/**
   * Agrega un listener de scroll a la div16.
   * Debe imprimir algo ('I was scrolled') cada vez que se hace scroll de ella.
   * Se recomienda NO usar alert para este ejercicio.
*/
};