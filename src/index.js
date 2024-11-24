
import indexContent from './html/index.html';
import { cargar_usuarios } from './html/list.js';
import App from './clases/app.js'
import Interfaz from './clases/interfaz.js'
import './style/styles.css';
import { downloadJSON, validarLista, leerArchivoJson, obtenerFechaYHora } from './utils.js'


const new_interfaz = new Interfaz(indexContent)
const APP = new App(new_interfaz)


document.body.addEventListener('change', async (event) => {
  if (event.target && event.target.id === 'file-input-listar-y-comparar') {
    async function listar_y_comparar() {
      let continuar = true
      let contenido = null
      try {
        contenido = await leerArchivoJson(event)
      } catch {
        continuar = false
      }

      if (continuar && contenido && validarLista(contenido)) {
        APP.interfaz.insertarListHTML()
        await cargar_usuarios(APP)
        APP.oldFollowers = contenido

        APP.buscar_left_followers()
        APP.buscar_new_followers()

        APP.interfaz.render_comparacion_followers(APP.leftFollowers, APP.newFollowers)
      }
    }
    listar_y_comparar()
  }

  if (event.target && event.target.id === 'file-input-only-lista') {
    async function listar() {
      let continuar = true
      let contenido = null
      try {
        contenido = await leerArchivoJson(event)
      } catch {
        continuar = false
      }

      if (continuar && contenido && validarLista(contenido)) {
        APP.interfaz.insertarListHTML()

        APP.interfaz.render_uploaded_list(contenido)
      }
    }
    listar()
  }

})

document.addEventListener('click', (event) => {
  if (event.target.id === 'solo-listar') {
    async function listar_followers() {
      APP.interfaz.insertarListHTML()
      await cargar_usuarios(APP)
      APP.interfaz.render_actual_followers(APP.actualFollowers)
    }
    listar_followers()

  }
  if (event.target.id === 'button-download-all-followers') {
    const fechayhora = obtenerFechaYHora()
    downloadJSON(APP.actualFollowers, `actual_followers_${fechayhora}.json`)
  }
  if (event.target.id === 'button-download-left-followers') {
    const fechayhora = obtenerFechaYHora()
    downloadJSON(APP.leftFollowers, `left_followers_${fechayhora}.json`)
  }
  if (event.target.id === 'button-download-new-followers') {
    const fechayhora = obtenerFechaYHora()
    downloadJSON(APP.newFollowers, `new_followers_${fechayhora}.json`)
  }
});



