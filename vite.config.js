import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/ahorcado-anime/',  // Ruta base para GitHub Pages
  build: {
    rollupOptions: {
      input: {
        // Aqui incluimos todas las paginas que queramos procesar
        main: path.resolve(__dirname, 'index.html'),
        juego_kny: path.resolve(__dirname, 'juego_kny.html'),
        juego_myhac: path.resolve(__dirname, 'juego_myhac.html'),
        juego_sao: path.resolve(__dirname, 'juego_sao.html'),
        juego_solo_leveling: path.resolve(__dirname, 'juego_solo_leveling.html'),
        juego_tokyo_ghoul: path.resolve(__dirname, 'juego_tokyo_ghoul.html'),
        // aqui metemos todas las que queramos
      }
    }
  }
});

