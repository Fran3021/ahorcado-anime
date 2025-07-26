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



//variables de musica
let musicaFondo = new Audio ('/src/music/myhac/op_myhac.mp3')
musicaFondo.volume = 0.2
musicaFondo.loop = true

let correctWord = new Audio ('/src/music/myhac/acierto-myhac.mp3.flac')
correctWord.volume = 0.7
correctWord.loop = false

let wrongWord = new Audio ('/src/music/myhac/error.mov')
wrongWord.volume = 0.4
wrongWord.loop = false

let gameOver = new Audio ('/src/music/myhac/game-over.mp3')
gameOver.volume = 0.7
gameOver.loop = false

let win = new Audio ('/src/music/myhac/win.mov')
win.volume = 0.3
win.loop = false

//creamos un array con las preguntas en distintos niveles de dificultad
let arrayPreguntasFacil = ['¿Qué gas producen los coches que contamina el aire?',
    '¿Cómo se llama el calentamiento de la Tierra por la contaminación?',
    '¿Qué podemos plantar para limpiar el aire?',
    '¿Qué debemos usar menos para ahorrar energía: ¿la bicicleta o el coche?',
    '¿Qué material reciclamos de las botellas?',
    '¿Qué gas necesitamos para respirar?',
    '¿Qué debemos apagar cuando no lo usamos para ahorrar energía?',
    '¿Cómo se llaman los bloques de hielo que se derriten por el calor?',
    '¿Qué animal está en peligro por el derretimiento del Ártico?',
    '¿Qué usamos para cargar nuestros dispositivos?',
]

let arrayPreguntasMedio = ['¿Qué gas de efecto invernadero se produce al quemar carbón o petróleo?',
    '¿Qué recurso natural necesitamos para producir energía solar?',
    '¿Qué proceso de las plantas ayuda a limpiar el aire?',
    '¿Qué tipo de bolsas de plástico debemos usar para cuidar el medio ambiente?',
    '¿Cómo se llama el fenómeno que ocurre cuando sube el nivel del mar?',
    '¿Qué podemos reciclar del papel para evitar cortar más árboles?',
    '¿Qué transporte no contamina y usa pedales?',
    '¿Qué recurso natural usamos para producir energía eólica?',
    '¿Qué debemos ahorrar para evitar la sequía?',
    '¿Qué planeta estamos tratando de proteger con el reciclaje?',
]

let arrayPreguntasDificil = ['¿Cómo se llama el proceso por el cual la Tierra se calienta debido a ciertos gases?',
    ' ¿Qué gas producido por las vacas contribuye al calentamiento global?',
    '¿Qué capa de la atmósfera protege la Tierra de los rayos solares dañinos?',
    '¿Cómo se llama el fenómeno en el que los glaciares se derriten rápidamente?',
    '¿Cómo se llama el proceso de conversión de vapor a líquido?',
    '¿Qué metal reciclamos de las latas para reducir la contaminación?',
    '¿Partícula subatómica sin carga?',
    '¿Qué energía renovable usamos con paneles solares?',
    '¿Qué tipo de combustibles producen más contaminación al quemarse?',
    '¿Qué acuerdo internacional busca reducir el cambio climático?',
]

//creamos un array con las respuestas en distintos niveles de dificultad
let arrayRespuestasFacil = ['dioxidodecarbono',
    'calentamientoglobal',
    'arboles',
    'coche',
    'plastico',
    'oxigeno',
    'luz',
    'glaciares',
    'osopolar',
    'electricidad',
]

let arrayRespuestasMedio = ['dioxidodecarbono',
    'sol',
    'fotosintesis',
    'reutilizables',
    'inundacion',
    'carton',
    'bicicleta',
    'viento',
    'agua',
    'tierra',
]

let arrayRespuestasDificil = ['efectoinvernadero',
    'metano',
    'ozono',
    'deshielo',
    'condensacion',
    'aluminio',
    'neutron',
    'solar',
    'fosiles',
    'acuerdodeparis',
]



function iniciarGame(nivelDificultad){
    if(nivelDificultad === 'facil'){
        preguntaRespuestaFacil()
        comprobarLetra()
        musicaFondo.play()
    }else if(nivelDificultad === 'medio'){
        preguntaRespuestaMedio()
        comprobarLetra()
        musicaFondo.play()
    }else if(nivelDificultad === 'dificil'){
        preguntaRespuestaDificil()
        comprobarLetra()
        musicaFondo.play()
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
    if(fallos >= maxFallos){
        messageMyhac.textContent = `Tu voluntad fue fuerte, pero esta vez el mal ganó. ¡No te rindas, joven aprendiz! La respuesta era --> ${respuesta}`.toUpperCase()
        messageMyhac.style.display = 'block'
        buttonAdivina.disabled = true
        buttonAdivina.style.pointerEvents = 'none'
        buttonRestart.style.display = 'block'
        inputLetra.disabled = true
        musicaFondo.pause();
        musicaFondo.currentTime = 0;
        gameOver.play()
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