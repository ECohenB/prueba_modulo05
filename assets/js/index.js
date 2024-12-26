import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from './animal.js';
import { mostrarDetalles } from './domUtils.js'; 
import { cargarDatos } from './data.js';

// Variables generales
const btnRegistrar = document.getElementById("btnRegistrar");
const animalesContainer = document.getElementById("Animales");
const player = document.getElementById("player");

const animales = [];
let datosAnimales = [];


(async () => {
  try {
    datosAnimales = await cargarDatos(); // Carga los datos del JSON y lo almacena en 'datosAnimales'
  } catch (error) {
    console.error("Error al cargar los datos del JSON:", error);
  }
})();

// Evento de click en el botón de registro
btnRegistrar.addEventListener("click", () => {
  const nombre = document.getElementById("animal").value;
  const edad = document.getElementById("edad").value;
  const comentarios = document.getElementById("comentarios").value;

  if (!nombre || !edad || !comentarios) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Busca datos del animal en el JSON
  const datosAnimal = datosAnimales.find((animal) => animal.name === nombre);
  if (!datosAnimal) {
    alert("No se encontraron datos para este animal.");
    return;
  }

  
  let animal;
  switch (nombre) {
    case "Leon":
      animal = new Leon(nombre, edad, comentarios, datosAnimal.sonido, datosAnimal.imagen);
      break;
    case "Lobo":
      animal = new Lobo(nombre, edad, comentarios, datosAnimal.sonido, datosAnimal.imagen);
      break;
    case "Oso":
      animal = new Oso(nombre, edad, comentarios, datosAnimal.sonido, datosAnimal.imagen);
      break;
    case "Serpiente":
      animal = new Serpiente(nombre, edad, comentarios, datosAnimal.sonido, datosAnimal.imagen);
      break;
    case "Aguila":
      animal = new Aguila(nombre, edad, comentarios, datosAnimal.sonido, datosAnimal.imagen);
      break;
  }

  animales.push(animal);
  actualizarTabla(animales); // actualiza el arreglo de animales y la tabla
});

// Función para actualizar la tabla
function actualizarTabla() {
  animalesContainer.innerHTML = "";
  animales.forEach((animal, index) => {
    const card = document.createElement("div");
    card.classList.add("card", "m-2");
    card.style.width = "150px";
    card.innerHTML = `
      <img src="assets/img/${animal.imagen}" class="card-img-top" alt="${animal.nombre}" data-index="${index}">
      <div class="card-body text-center">
        <button class="btn btn-dark" onclick="reproducir(${index})">Sonido</button>
      </div>
    `;
    // Evento de click
    card.querySelector("img").addEventListener("click", () => mostrarDetalles(index, animales)); // Pasa 'animales' al modal
    animalesContainer.appendChild(card);
  });
}

// Sonido del animal
window.reproducir = (index) => {
  animales[index].reproducirSonido(player); 
};
