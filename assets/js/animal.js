export class Animal {
    constructor(nombre, edad, comentarios, sonido, imagen) {
      this.nombre = nombre;
      this.edad = edad;
      this.comentarios = comentarios;
      this.sonido = sonido;
      this.imagen = imagen;
    }
  
    reproducirSonido() {
      player.src = `assets/sounds/${this.sonido}`;
      player.play();
    }
  }
  
  // Subclases de Animal
  export class Leon extends Animal {}
  export class Lobo extends Animal {}
  export class Oso extends Animal {}
  export class Serpiente extends Animal {}
  export class Aguila extends Animal {}
  