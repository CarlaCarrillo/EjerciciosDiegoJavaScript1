//Imprime la fecha actual
var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var f=new Date();
document.write(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

// Obten el área de un triángulo. Pidele los 3 lados al 

function calculaPerim(){
var textResultado = document.getElementById("textperim");
var a = parseInt(document.getElementById("lado1").value);
var b = parseInt(document.getElementById("lado2").value);
var c = parseInt(document.getElementById("lado2").value);

 var perim = a * b * c;

textResultado.value = perim;

}

// Voltea una string dada por el usuario
function invertir_text(texto) { 
    return texto.split('').reverse().join('')
}

function reverse() {

    var invertir = String(window.prompt('ingresa palabra'));
    var rvs = invertir.split("");
    alert(rvs.reverse(invertir).join(""));

}

function reverse() {

    var invertir = String(window.prompt('ingresa palabra'));
    var rvs = invertir.split("");
    alert(rvs.reverse(invertir).join(""));

}



// Voltea una string dada por el usuario sin usar el método de reverse
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



//Convierte una temperatura dada en C o F a F o C, respectivamente
function convert(degree) {
    var x;
    if (degree == "C") {
      x = document.getElementById("c").value * 9 / 5 + 32;
      document.getElementById("f").value = Math.round(x);
    } else {
      x = (document.getElementById("f").value -32) * 5 / 9;
      document.getElementById("c").value = Math.round(x);
    }
  }




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