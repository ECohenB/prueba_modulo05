export async function cargarDatos() {
    try {
      const response = await fetch('assets/js/animales.json');
      if (!response.ok) throw new Error("No se pudo cargar el archivo JSON");
      const data = await response.json();
      return data.animales;
    } catch (error) {
      console.error("Error al cargar los datos del JSON:", error);
      return [];
    }
  }
  