export function mostrarDetalles(index, animales) {
    // Verificar si el índice es válido y si existe un animal
    if (index < 0 || index >= animales.length) {
      console.error("Índice inválido o animal no encontrado:", index);
      return;
    }
  
    const animal = animales[index];
    const modalBody = document.getElementById("modal-body");
  
    // Modal
    modalBody.innerHTML = `
      <img src="assets/img/${animal.imagen}" class="img-fluid mb-3" alt="${animal.nombre}">
      <p><strong>Nombre:</strong> ${animal.nombre}</p>
      <p><strong>Edad:</strong> ${animal.edad}</p>
      <p><strong>Comentarios:</strong> ${animal.comentarios}</p>
    `;
  
    // Mostrar el modal con Bootstrap
    const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
  }
  
  // Función para actualizar la tabla de animales 
  export function actualizarTabla(animales, animalesContainer) {
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
      // Agregar el evento click
      card.querySelector("img").addEventListener("click", () => mostrarDetalles(index, animales));
      animalesContainer.appendChild(card);
    });
  }
  