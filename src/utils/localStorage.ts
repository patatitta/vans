      import Alpine from 'alpinejs'
      import collapse from '@alpinejs/collapse'
    Alpine.plugin(collapse)
    Alpine.start()

function guardar(talla: any, producto: any){
    let objeto = JSON.stringify({
    talla: talla,
    producto: producto
})
localStorage.setItem('carrito', objeto)
}

export{guardar};

function leer(){
    return (Alpine.store('carrito'))
}