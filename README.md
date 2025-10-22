# Juego Ahorcado Anime

Este proyecto es un **juego del ahorcado** ambientado en el mundo del anime, desarrollado como práctica personal para afianzar conocimientos de desarrollo web moderno. El usuario debe adivinar palabras relacionadas con animes populares antes de que el personaje (por ejemplo, Deku de My Hero Academia) sea "ahorcado" o se acabe el tiempo.

---

## Tecnologías utilizadas

- **HTML5**  
  Estructura semántica de la aplicación, uso de etiquetas modernas y accesibles.

- **SCSS (SASS)**  
  Preprocesador CSS para una gestión avanzada de estilos, variables, mixins, breakpoints y organización modular de los estilos (`/sass/layout`, `/sass/abstracts`, etc.).

- **JavaScript (ES6+)**  
  Lógica del juego, manipulación del DOM, gestión de eventos, temporizadores, animaciones y control de audio.

- **AOS (Animate On Scroll)**  
  Librería para animaciones de entrada de elementos al hacer scroll, mejorando la experiencia visual.

- **Audio HTML5**  
  Integración de música y efectos de sonido para aciertos, errores, victoria y derrota.

- **Responsive Design**  
  Adaptación total a dispositivos móviles, tablets y escritorio mediante media queries y breakpoints personalizados en SCSS.

---

## Funcionalidades principales

- **Selección de dificultad**  
  El usuario puede elegir la dificultad mediante botones interactivos, sin prompts molestos.

- **Animación de personaje**  
  El personaje anime (por ejemplo, Deku) se va dibujando/progresando según los fallos del usuario.

- **Barra de progreso animada**  
  El jugador dispone de un tiempo limitado para adivinar la palabra, visualizado mediante una barra de progreso y un muñeco animado que se mueve suavemente.

- **Gestión de palabras correctas e incorrectas**  
  Visualización clara de las letras acertadas y fallidas.

- **Reinicio de partida**  
  Botón para reiniciar el juego en cualquier momento tras victoria o derrota.

- **Curiosidades y datos de anime**  
  Sección informativa con curiosidades sobre los animes presentes en el juego, animada con AOS.

- **Música y efectos**  
  Música de fondo y efectos de sonido personalizados para cada acción relevante del juego.

---

## Organización del código

- `/index.html` y variantes: Plantillas HTML para cada modo o anime.
- `/public/js/`: Lógica principal del juego, gestión de eventos, temporizadores y audio.
- `/sass/`: Estructura modular de estilos con SCSS.
- `/public/img/`: Imágenes de personajes, fondos y elementos visuales.
- `/public/music/`: Audios de fondo y efectos.

---

## Cómo ejecutar el proyecto

1. Clona el repositorio.
2. Instala las dependencias necesarias si usas un empaquetador (ej: Vite, Webpack).
3. Compila los estilos SCSS a CSS.
4. Abre `index.html` en tu navegador favorito.
5. ¡Disfruta jugando y aprendiendo sobre anime!

---

## Créditos

- Proyecto realizado por Fran.
- Imágenes y música pertenecen a sus respectivos autores y se usan solo con fines educativos y sin ánimo de lucro.

---

## Licencia

Este proyecto es de uso educativo y personal. No está