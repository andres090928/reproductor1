// Función para mostrar la canción seleccionada
function mostrarCancion(nombreCancion, imagenCaratula, nombreArtista, urlAudio) {
    // Guarda la información de la canción en el almacenamiento local
    localStorage.setItem('cancionSeleccionada', nombreCancion);
    localStorage.setItem('imagenCaratula', imagenCaratula);
    localStorage.setItem('nombreArtista', nombreArtista);
    localStorage.setItem('urlAudio', urlAudio);

    // Mensajes de depuración
    console.log('Canción seleccionada:', nombreCancion);
    console.log('Imagen de carátula:', imagenCaratula);
    console.log('Artista:', nombreArtista);
    console.log('URL de audio:', urlAudio);

    // Redirige al usuario a la página del reproductor
    window.location.href = 'reproductor.html';
}

// Función para mostrar el género seleccionado
function mostrarGenero(genero) {
    const generos = ['Popular', 'Bachatas', 'salsas'];
    // Muestra el contenido del género seleccionado y oculta los demás
    generos.forEach(g => {
        document.getElementById(g).style.display = g === genero ? 'block' : 'none';
    });

    // Actualiza el estado activo de los botones de género
    document.getElementById('bachata').classList.toggle('active', genero === 'Popular');
    document.getElementById('reggaeton').classList.toggle('active', genero === 'Bachatas');
    document.getElementById('salsa').classList.toggle('active', genero === 'salsas');
}

// Al cargar el contenido del DOM, muestra por defecto el género 'Popular'
document.addEventListener('DOMContentLoaded', function() {
    mostrarGenero('Popular');
});

// Índice de la canción actual
let currentIndex = 0;

// Lista de reproducción con canciones, sus imágenes, artistas y URLs de audio
const playlist = [
    {nombre: 'No Volvera', imagen: 'img/cancion1.jpeg', artista: 'Cris Valencia', audio: 'audio/cancion1.mp3'},
    {nombre: 'Followers', imagen: 'img/cancion2.jpeg', artista: 'Pirlo', audio: 'audio/cancion2.mp3'},
    {nombre: 'Ni Parientes...', imagen: 'img/cancion3.jpeg', artista: 'Los Tigres Del Norte', audio: 'audio/cancion3.mp3'},
    {nombre: 'La Mesa Del Rincón', imagen: 'img/cancion4.jpeg', artista: 'Los Tigres Del Norte', audio: 'audio/cancion4.mp3'},
    {nombre: 'Me Hace Daño Verte', imagen: 'img/cancion5.jpeg', artista: 'Fresto', audio: 'audio/cancion5.mp3'},
    {nombre: 'Ella y Yo', imagen: 'img/cancion6.jpeg', artista: 'Don Omar', audio: 'audio/cancion6.mp3'},
    {nombre: 'La Tanguita Roja', imagen: 'img/cancion7.jpeg', artista: 'Oro Solido', audio: 'audio/cancion7.mp3'},
    {nombre: 'Buscaré Otro Amor', imagen: 'img/cancion8.jpeg', artista: 'Los Inquietos', audio: 'audio/cancion8.mp3'},
    {nombre: 'Propuesta Indecente', imagen: 'img/cancion11.jpg', artista: 'Romeo Santos', audio: 'audio/cancion10.mp3'},
    {nombre: 'Dile al Amor', imagen: 'img/cancion12.jpeg', artista: 'Aventura', audio: 'audio/cancion15.mp3'},
    {nombre: 'Llévame Contigo', imagen: 'img/cancion13.jpg', artista: 'Romeo Santos', audio: 'audio/cancion13.mp3'},
    {nombre: 'Pronto Llegará', imagen: 'img/cancion14.jpg', artista: 'Hector Lavoe', audio: 'audio/cancion14.mp3'},
    {nombre: 'Gotas de Lluvia', imagen: 'img/cancion15.jpeg', artista: 'Grupo Niche', audio: 'audio/cancion15.mp3'},
];

// Función para pasar a la siguiente canción
function pasarCancion() {
    currentIndex = (currentIndex + 1) % playlist.length; // Incrementa el índice y vuelve al inicio si es necesario
    actualizarReproductor();
}

// Función para volver a la canción anterior
function volverCancion() {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length; // Decrementa el índice y vuelve al final si es necesario
    actualizarReproductor();
}

// Función para actualizar la información del reproductor
function actualizarReproductor() {
    // Obtiene la información de la canción actual
    const {nombre, imagen, artista, audio} = playlist[currentIndex];
    // Guarda la información en el almacenamiento local
    localStorage.setItem('cancionSeleccionada', nombre);
    localStorage.setItem('imagenCaratula', imagen);
    localStorage.setItem('nombreArtista', artista);
    localStorage.setItem('urlAudio', audio);

    // Actualiza el elemento de audio y comienza a reproducir la canción
    const audioElement = document.getElementById('audio');
    audioElement.src = audio;
    audioElement.load();
    
    // Mensajes de depuración
    console.log('Reproduciendo:', nombre);
    console.log('Artista:', artista);
    console.log('URL de audio:', audio);
    
    audioElement.play().then(() => {
        // Cambia el icono del botón de reproducción/pausa a pausa
        const playPauseButton = document.getElementById('play-pause');
        playPauseButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
    }).catch(error => {
        // Muestra un error si no se puede reproducir el audio
        console.error('Error al reproducir audio:', error);
    });
}
///////////////////////

		// JavaScript para controlar la animación de aparición y desaparición del texto
		const letras = document.querySelectorAll('.letra');
		const imagen = document.getElementById('imagen');

		// Mostrar letras una a una
		let delay = 0;
		letras.forEach((letra, index) => {
			letra.style.setProperty('--i', index + 1); // Asignar variable CSS --i
			setTimeout(() => {
				letra.classList.add('letra'); // Añadir clase para animación de aparecer
			}, delay);
			delay += 100; // Intervalo entre la aparición de cada letra
		});

		// Después de mostrar todo el texto, esperar 4 segundos y desaparecer letras
		setTimeout(() => {
			letras.forEach((letra, index) => {
				setTimeout(() => {
					letra.classList.add('desaparecer'); // Añadir clase para animación de desaparecer
				}, index * 100); // Intervalo entre la desaparición de cada letra
			});
			// Mostrar la imagen después de que desaparezca el texto
			setTimeout(() => {
				imagen.style.display = 'block';
				imagen.classList.add('mostrar'); // Añadir clase para animación de mostrar la imagen
			}, letras.length * 100);
		}, letras.length * 200 + 2000); // Esperar 4 segundos después de mostrar todas las letras


/////////////////
