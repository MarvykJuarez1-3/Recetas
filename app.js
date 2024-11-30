// Importamos las dependencias necesarias
const express = require('express');
const mysql = require('mysql2');  // Usamos mysql2 en lugar de mysql
const path = require('path');
const app = express();
const port = 3000;

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuración para usar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'autorack.proxy.rlwy.net',  // Dirección del host en Railway
  user: 'root',                     // Usuario proporcionado por Railway
  password: 'lauorTrawmjlzdAHadiJonNolvzzdeBr',  // Contraseña proporcionada por Railway
  database: 'railway',              // Nombre de la base de datos
  port: 18048                       // Puerto proporcionado por Railway
});

// Conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión a la base de datos establecida');
});

// Exportamos la conexión para usarla en las rutas
module.exports.connection = connection;

// Importamos las rutas
const recetasRoutes = require('./routes/recetas');

// Usamos las rutas en la aplicación
app.use('/', recetasRoutes);

// Iniciamos el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
