//Función para agregar un nuevo personaje favorito
function nuevoPersonaje() {
    var personajeFavorito = document.createElement("li");
    personajeFavorito.textContent = document.getElementById("NuevoPersonajes").value;
    document.getElementById("PersonajesNuevo").appendChild(personajeFavorito);
}

//Función para borrar una pelicula favorita
function borrarPelicula() {
    var eliminarPelicula = document.getElementById("listPersonajes");
    var BorrarPelicula = document.getElementById("BorrarPelicula").value - 1;
    eliminarPelicula.removeChild(eliminarPelicula.children[BorrarPelicula]);
}

//Función para agregar mis peliculas favoritas a la lista de peliculas dada.
function peliculasFavoritas() {
    //Creación de mi array con mis peliculas favoritas
    var misPelisFav = ["Diario de una pasión", "After", "Me before you"];

    //Creacion de ciclo para recorrer el array
    for (var i = 0; i < misPelisFav.length; i++) {
        //Creación un nuevo nodo | li representa el elemento de una lista
        //En este caso la lista dada de peliculas
        var nodoList = document.createElement("li");
        //Creación de otro nodo tipo texto | Le doy el valor de i en este caso de mi array
        var peliculasfav = document.createTextNode(misPelisFav[i]);
        //Añado peliculasfav como hijo a nodoList, para posteriormente agregar a nodoList a la lista final
        nodoList.appendChild(peliculasfav);
        document.getElementById("listPersonajes").appendChild(nodoList);
    }
}

//Función que mostrará mi información por medio de DOM
function informacion() {
    var nuevoP = document.createElement("p");
    var texto = document.createTextNode("Nombre: Sheila Elizabeth Vázquez Chimay");
    nuevoP.appendChild(texto);
    var anteriorP = document.getElementsByTagName("p")[0];
    document.body.insertBefore(nuevoP, anteriorP);

    var nuevoP = document.createElement("p");
    var texto = document.createTextNode("Numero de control: 17390367");
    nuevoP.appendChild(texto);
    var anteriorP = document.getElementsByTagName("p")[0];
    document.body.insertBefore(nuevoP, anteriorP);
}

//Función para recargar o limpiar inputs
function limpiar(){
    document.getElementById("NuevoPersonajes").value = '';
    document.getElementById("BorrarPelicula").value = '';
}

//Función para mostrar mi informacion, mi array y limpiar al mismo tiempo
function inicial() {
    informacion();
    peliculasFavoritas();
    limpiar()
}

//Se encarga de ejecutar apenas cargue la pagina la función inicial
window.onload = inicial;

