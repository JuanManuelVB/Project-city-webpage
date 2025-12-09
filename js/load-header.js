(() => {
  const { dataset } = document.currentScript || {}; // Obtener los data-attributes del script actual
  const { path, target } = dataset || {}; // Extraer 'path' y 'target' de los data-attributes
  if (!path || !target) return;   // Si no están definidos, salir

  const container = document.getElementById(target); // Obtener el contenedor objetivo
  if (!container) return; // Si no existe el contenedor, salir

  const load = async () => {
    try {
      const res = await fetch(path);    // Extraer el contenido del archivo HTML
      if (!res.ok) throw res;   // Comprobante de errores en la respuesta
      container.innerHTML = await res.text(); // Insertar el HTML en el contenedor y esperar a que se cargue

      // Reemplazar los scripts para que se ejecuten
      container.querySelectorAll('script').forEach(s => { // Iterar sobre cada script
        const newScript = document.createElement('script');  // Crear un nuevo elemento script
        s.src ? newScript.src = s.src : newScript.textContent = s.textContent; // Copiar src o contenido
        s.replaceWith(newScript); // Reemplazar el script antiguo por el nuevo
      });
    } catch (e) {
      console.error('load-header:', e);
    }
  };

  document.readyState === 'loading' // El DOM aún se está cargando
    ? document.addEventListener('DOMContentLoaded', load) // Esperar al DOMContentLoaded
    : load();  // Ejecutar inmediatamente si el DOM ya está cargado
})();
