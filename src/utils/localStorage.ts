  function clonar() {
    const menuTallas = document.querySelector("#menuProductos");
    const stored = localStorage.getItem("carrito");


    console.log(stored)
    console.log(menuTallas)

    let carritoProducto = document.querySelector(".carritoProducto");
    if (stored == null || carritoProducto == null) {
      return;
    }

    let arrayCarrito = JSON.parse(stored);
    for (let iterable of arrayCarrito) {
      let clon = carritoProducto.cloneNode(true) as Element;
      if (clon == null || clon.querySelector(".nombre") == null) {
        return;
      }
      const nombreElem = clon.querySelector(".nombre");
      if (nombreElem == null) {
        return;
      }
      nombreElem.textContent = iterable.nombre;
      
      const imagenElem = clon.querySelector(".imagen");
      if (imagenElem == null) {
        return;
      }
      imagenElem.src=iterable.imagen+"?w=125&format=auto";
      

  document.addEventListener('alpine:initialized', () => {
      const datos = Alpine.$data(clon);
      datos.cantidad = iterable.cantidad;
        datos.precio = iterable.precio
      datos.talla = iterable.talla
      datos.color = iterable.color
      datos.id = iterable.id
  });

  



      menuTallas?.append(clon);
    }
  }
  export default clonar;