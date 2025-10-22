import './sass/style.scss'

//seleccionamos los elementos necesarios del html
let title = document.querySelector('h1')
let main = document.getElementById('main-principal')
let preguntas = document.getElementById('pregunta')
let palabrasCorrectas = document.getElementById('palabra-correcta')
let palabrasIncorrectas = document.getElementById('palabra-incorrecta')
let buttonAdivina = document.getElementById('adivina-palabra')
let messageMyhac = document.getElementById('message-myhac')
let buttonRestart = document.getElementById('restart-button')
let image1 = document.getElementById('image-1')
let image2 = document.getElementById('image-2')
let image3 = document.getElementById('image-3')
let image4 = document.getElementById('image-4')
let image5 = document.getElementById('image-5')
let image6 = document.getElementById('image-6')
let errorPalabra = document.getElementById('error-palabra')
let mainJuego = document.getElementById('container-juego')
let segundosRestantes;
let tiempoTotal;
let intervaloTiempo;

function iniciarBarraProgreso(duracionSegundos) {
    segundosRestantes = duracionSegundos;
    tiempoTotal = duracionSegundos;
    const barra = document.getElementById("barra-progreso");
    const muñeco = document.getElementById("muñeco");

  intervaloTiempo = setInterval(() => {
    segundosRestantes--;

    // Calcula el porcentaje restante
    const porcentaje = (segundosRestantes / tiempoTotal) * 100;
    barra.style.width = `${porcentaje}%`;

    // Mueve al muñeco a lo largo de la barra
    const contenedor = document.getElementById("barra-tiempo-container");
    const anchoContenedor = contenedor.offsetWidth;
    const nuevaPosX = ((tiempoTotal - segundosRestantes) / tiempoTotal) * anchoContenedor;
    muñeco.style.right = `${nuevaPosX - muñeco.offsetWidth / 2}px`;

    comprobarDerrota()
    }, 1000);
}



//variables de musica
let musicaFondo = new Audio ('/music/myhac/op_myhac.mp3')
musicaFondo.volume = 0.1
musicaFondo.loop = true

let correctWord = new Audio ('/music/myhac/acierto-myhac.mp3.flac')
correctWord.volume = 0.7
correctWord.loop = false

let wrongWord = new Audio ('/music/myhac/error.mov')
wrongWord.volume = 0.4
wrongWord.loop = false

let gameOver = new Audio ('/music/myhac/game-over.mp3')
gameOver.volume = 0.7
gameOver.loop = false

let win = new Audio ('/music/myhac/win.mov')
win.volume = 0.3
win.loop = false

//creamos un array con las preguntas en distintos niveles de dificultad
let arrayPreguntasFacil = [
    "¿Nombre del protagonista?",
    "¿Nombre de héroe de All Might?",
    "¿Poder heredado por Deku?",
    "¿Rival de infancia de Deku?",
    "¿Escuela de héroes?",
    "¿Apodo de Todoroki?",
    "¿Maestro de Deku?",
    "¿Parte del cuerpo que usa Uraraka?",
    "¿Sueño de Deku?",
    "¿Animal de Tsuyu?"
]

let arrayPreguntasMedio = [
    "¿Clase de Midoriya?",
    "¿Don de Iida?",
    "¿Nombre real de Dabi?",
    "¿Don de Yaoyorozu?",
    "¿Debilidad de Kaminari?",
    "¿Líder inicial de la Liga?",
    "¿Don de Bakugo?",
    "¿Evento deportivo escolar?",
    "¿Alumno con sombras?",
    "¿Lado que congela Todoroki?"
]

let arrayPreguntasDificil = [
    "¿Villano que creó One For All?",
    "¿Nombre completo de Hawks?",
    "¿Héroe con voz como arma?",
    "¿Número de Deku con One For All?",
    "¿Segundo don de Deku?",
    "¿Alumno que habla con animales?",
    "¿Héroe que perdió una pierna?",
    "¿Villano infiltrado en U.A.?",
    "¿Mentora de All Might?",
    "¿Ranking de Endeavor tras All Might?"
]

//creamos un array con las respuestas en distintos niveles de dificultad
let arrayRespuestasFacil = [
    "midoriya",
    "allmight",
    "oneforall",
    "bakugo",
    "ua",
    "fuegohielo",
    "allmight",
    "dedos",
    "heroe",
    "rana"
]


let arrayRespuestasMedio = [
    "1a",
    "engine",
    "toya",
    "creacion",
    "atontado",
    "shigaraki",
    "explosion",
    "festival",
    "tokoyami",
    "derecho"
]

let arrayRespuestasDificil = [
    "allforone",
    "keigo",
    "mic",
    "noveno",
    "blackwhip",
    "koda",
    "aizawa",
    "kurogiri",
    "nana",
    "uno"
]



function iniciarGame(nivelDificultad){
    if(nivelDificultad === 'facil'){
        preguntaRespuestaFacil()
        comprobarLetra()
        musicaFondo.play()
        iniciarBarraProgreso(60)
    }else if(nivelDificultad === 'medio'){
        preguntaRespuestaMedio()
        comprobarLetra()
        musicaFondo.play()
        iniciarBarraProgreso(45)
    }else if(nivelDificultad === 'dificil'){
        preguntaRespuestaDificil()
        comprobarLetra()
        musicaFondo.play()
        iniciarBarraProgreso(30)
    }
}

let respuesta
let palabraIncorrecta = []
let maxFallos = 6
let fallos = 0
let palabraCorrecta = []


function preguntaRespuestaFacil(){
    let pregunta = arrayPreguntasFacil[Math.floor(Math.random() * arrayPreguntasFacil.length)]
    preguntas.textContent = pregunta
    let indexPregunta = arrayPreguntasFacil.findIndex(question => question === pregunta)
    respuesta = arrayRespuestasFacil[indexPregunta]
}

function preguntaRespuestaMedio(){
    let pregunta = arrayPreguntasMedio[Math.floor(Math.random() * arrayPreguntasMedio.length)]
    preguntas.textContent = pregunta
    let indexPregunta = arrayPreguntasMedio.findIndex(question => question === pregunta)
    respuesta = arrayRespuestasMedio[indexPregunta]
}

function preguntaRespuestaDificil(){
    let pregunta = arrayPreguntasDificil[Math.floor(Math.random() * arrayPreguntasDificil.length)]
    preguntas.textContent = pregunta
    let indexPregunta = arrayPreguntasDificil.findIndex(question => question === pregunta)
    respuesta = arrayRespuestasDificil[indexPregunta]
}


function comprobarLetra(){
    let palabraAdivinar = Array(respuesta.length).fill('_')
    buttonAdivina.addEventListener('click', () => {
        let valor = document.getElementById('input-letra').value.toLowerCase()
        let inputLetra = document.getElementById('input-letra')
        inputLetra.value = ''
        let letraCorrecta = false
        let numerosLetras = /^[a-zA-Z0-9]+$/
        if(!numerosLetras.test(valor)){
            errorPalabra.innerHTML = 'No has introducido un caracter válido'
        }else{
            for(let i = 0; i < respuesta.length; i++){
                if(respuesta[i] === valor){
                    errorPalabra.innerHTML = ''
                    palabraAdivinar[i] = valor
                    palabraCorrecta[i] = valor
                    letraCorrecta = true
                    correctWord.play()
                    comprobarVictoria()
                }
            }
            if(!letraCorrecta){
                errorPalabra.innerHTML = ''
                palabraIncorrecta.push(valor)
                palabrasIncorrectas.textContent = palabraIncorrecta.join(' ')
                fallos += 1
                letraCorrecta = false
                wrongWord.play()
                comprobarDerrota()
                dibujar()
            }
        }
        palabrasCorrectas.textContent = palabraAdivinar.join(' ')
    })
}

function comprobarDerrota(){
    let inputLetra = document.getElementById('input-letra')
    if(fallos >= maxFallos || segundosRestantes <= 0){
        messageMyhac.textContent = `Tu voluntad fue fuerte, pero esta vez el mal ganó. ¡No te rindas, joven aprendiz! La respuesta era --> ${respuesta}`.toUpperCase()
        messageMyhac.style.display = 'block'
        buttonAdivina.disabled = true
        buttonAdivina.style.pointerEvents = 'none'
        buttonRestart.style.display = 'block'
        inputLetra.disabled = true
        musicaFondo.pause();
        musicaFondo.currentTime = 0;
        gameOver.play()
        clearInterval(intervaloTiempo);
        buttonRestart.addEventListener('click', () => {
            location.reload()
        })
    }
}

function comprobarVictoria(){
    let inputLetra = document.getElementById('input-letra')
    if(palabraCorrecta.join(',').replaceAll(',' ,'') === respuesta){
        messageMyhac.textContent = '¡Plus Ultra! Has demostrado que el espíritu de un héroe vive en ti.'
        messageMyhac.style.display = 'block'
        musicaFondo.pause();
        musicaFondo.currentTime = 0;
        win.play()
        buttonAdivina.disabled = true
        buttonAdivina.style.pointerEvents = 'none'
        buttonRestart.style.display = 'block'
        inputLetra.disabled = true
        clearInterval(intervaloTiempo);
        buttonRestart.addEventListener('click', () => {
            location.reload()
        })
    }
}

function dibujar() {
    if (fallos >= 1) {
        image1.style.opacity = '1'
    }


    if (fallos >= 2) {
        image6.style.opacity = '1'
    }

    if (fallos >= 3) {
        image3.style.opacity = '1'
    }

    if (fallos >= 4) {
        image4.style.opacity = '1'
    }

    if (fallos >= 5) {
        image5.style.opacity = '1'
    }

    if (fallos >= 6) {
        image2.style.opacity = '1'
    }
}


// Nueva función para mostrar botones y escuchar el click
function mostrarSelectorDificultad() {
    const pantalla = document.getElementById('pantalla-dificultad');
    const botones = document.querySelectorAll('.btn-dificultad');
    botones.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const dificultad = e.target.getAttribute('data-dificultad');
            pantalla.style.display = 'none';
            mainJuego.style.display = 'block'
            iniciarGame(dificultad);
        });
    });
}

// Llama a la función al cargar la página
document.addEventListener('DOMContentLoaded', mostrarSelectorDificultad);