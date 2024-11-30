const express = require('express');
const router = express.Router();
const connection = require('../app').connection; // Importamos la conexión a la base de datos

// Ruta para el Home Page
router.get('/', (req, res) => {
  res.render('home');  // Renderizamos la vista 'home'
});

// Ruta para obtener todas las recetas
router.get('/recetas', (req, res) => {
  connection.query('SELECT * FROM recetas', (err, results) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
      return res.status(500).send('Error en la base de datos: ' + err.message);
    }

    console.log(results);  // Esto debe mostrar los resultados en la consola del servidor.

    res.render('index', { recetas: results });
  });
});

module.exports = router;
