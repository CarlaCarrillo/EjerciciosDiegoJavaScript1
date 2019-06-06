// Crea un listener de error que cargue una imagen por defecto (dogge.jpg)
window.onload = () => {
  const image = new Image();
  image.style = 'width: 256px';
  image.src = 'invalid-image';
  document.querySelector('div').append(image);
};