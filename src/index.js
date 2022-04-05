const express = require('express');
const path = require('path')
const mainRouter = require('./routes/index');



const app = express();
const server = app.listen(8080, () =>
  console.log('Server arriba en puerto', puerto)
);

server.on('error', (err) => {
  console.log('ERROR', err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));



app.use('/api', mainRouter);
