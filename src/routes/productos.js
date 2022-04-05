const express = require('express');
const { v4: uuidv4 } = require('uuid');


let productos = [];

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    productos,
  });
});

app.get('/:num', (req, res) => {
    const numeroLetra = parseInt(req.params.num);
    const found = productos.find(producto => producto.id === numeroLetra )
});


router.post('/', (req, res) => {
  const body = req.body;

  const nuevoProducto = {
    id: uuidv4(),
    title: body.title,
    price: body.price,
    thumbnail: body.thumbnail,
  };

  personas.push(nuevoProducto);
  res.json({
    nuevoProducto,
  });
});

module.exports = router