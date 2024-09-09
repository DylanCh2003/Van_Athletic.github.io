function detalleProducto(id) {
    // Redirigir a la página de descripción del producto con el ID
    window.location.href = `DescripcionProductos.html?id=${id}`;
  }
  
  function displayProducts(data, categoria = '') {
    // Limpiar el contenedor de productos antes de listar
    $("#product-list").html('');
    
    // Iterar sobre los productos
    data.forEach((producto) => {
      // Comprobar si la categoría coincide (si se ha pasado una categoría)
      if (categoria === '' || producto.categoria.toLowerCase().includes(categoria.toLowerCase())) {
        
        // Generar la imagen principal o una imagen por defecto si no hay imágenes
        const imagenPrincipal = producto.imagen ? producto.imagen : './img/image-not-found.jpg';
        
        // Crear la tarjeta del producto
        const cardBook = `
          <div class="col">
            <div class="card card-related-products">
              <img src="${imagenPrincipal}" class="card-img-top" alt="Imagen del producto">
              <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">&cent;${producto.precio}</p>
                <p class="card-text">Categoría: ${producto.categoria}</p>
                <div class="d-grid gap-2">
                  <button type="button" class="btn btn-lg" onclick="detalleProducto(${producto.id})">Detalle</button>
                </div>
              </div>
            </div>
          </div>`;
        
        // Añadir la tarjeta al contenedor
        $("#product-list").append(cardBook);
      }
    });
  }
  
  // Función para filtrar productos por categoría o nombre
  function filterProducts() {
    var input = document.getElementById('search-input').value.toLowerCase();
    displayProducts(productos, input);
    return false; 
  }
  
  $(document).ready(function () {
    // Listar productos al cargar la página
    displayProducts(productos);
  });
  