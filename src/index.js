
const express = require('express');
const path = require('path')
const mainRouter = require('./routes/index');

// Inicializacion de servidor, definicion y asignacion de puerto
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server arriba en puerto', puerto)
);

//Captura de error
server.on('error', (err) => {
  console.log('ERROR', err);
});

// Se agrega lo sig para poder trabajar correctamente con lo que nos envian en el body de un POST o PUT
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

// Definicion de router principal
// Cuando la ruta empieza con /api, uso la ruta principal
app.use('/api', mainRouter);
