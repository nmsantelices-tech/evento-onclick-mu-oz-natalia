// Función para eliminar un botón
function eliminarBoton() {
    // Seleccionar el botón por su ID y guardarlo en una variable
    const boton = document.querySelector("#boton1");
    // Eliminar el botón del DOM
    boton.remove();
}

// Función para mostrar un mensaje
function mostrarMensaje() {
    // Declarar una variable con el mensaje a mostrar
    const mensaje = "Este es un mensaje personalizado!";
    // Mostrar el mensaje en una alerta
    alert(mensaje);
}

// Función para cambiar el texto de un botón
function cambiarTexto() {
    // Seleccionar el botón por su ID y guardarlo en una variable
    const boton = document.querySelector("#nav-boton");
    // Cambiar el texto del botón
    boton.textContent = "Cerrar sesión";
}

// Función para incrementar el contador de "Me gusta"
function darMeGusta(event) {
    // Identificar el botón que fue clickeado
    let boton = event.target;
    // Buscamos el span dentro del boton que contiene el numero que cambiará
    let etiquetaSpan = boton.querySelector("span");
    // Obtenemos el valor numérico que contiene esa etiqueta "span" y lo convertimos a tipo número
    let valorNumero = parseInt(etiquetaSpan.textContent);
    // Aumentamos el valor de ese número en 1 (+1)
    let nuevoValor = valorNumero + 1;
    // Reasignamos el nuevo valor a la etiqueta "span" para que se actualice en la página
    etiquetaSpan.textContent = nuevoValor;
    // Para enviar mostrar mensaje por cada tarjeta : 
    // Buscamos la tarjeta
    let tarjeta = boton.closest(".tarjeta");
    //buscamos el titulo que identifica la tarjeta
    let titulo = tarjeta.querySelector("h2");
    // Obtenemos el nombre del animal de la tarjeta
    let nombreAnimal = titulo.textContent;
    //mostramos el mensaje 
    alert("¡Le ha gustado: " + nombreAnimal + "!");
}

