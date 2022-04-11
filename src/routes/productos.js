const express = require('express');
const { v4: uuidv4 } = require('uuid');


let productos = [
  {
		"id": 1,
		"title": "The Very Best of the Doors 2CD",
		"price": 13.07,
		"thumbnail": "https://m.media-amazon.com/images/I/91hrbype4aL._SY355_.jpg"
	},
	{
		"id": 2,
		"title": "Blood Sugar Sex Magik",
		"price": 9.99,
		"thumbnail": "https://m.media-amazon.com/images/I/81hS2wgxbhL._SY355_.jpg"
	},
	{
		"id": 3,
		"title": "Pearl Jam Completely Unplugged Limited Edition",
		"price": 49.77,
		"thumbnail": "https://m.media-amazon.com/images/I/81NDZb-JShL._SY355_.jpg"
	}
];


const router = express.Router();

router.get('/', (req, res) => {
  return res.json({
    productos,
  });
});

router.get('/:num', (req, res) => {
  const numeroLetra = parseInt(req.params.num);
  const found = productos.find(producto => producto.id === numeroLetra )
  const error = 'producto no encontrado'
  console.log(found);
  if (found !== undefined) {
    return res.json({
      found,
      });
  } else {
    return res.json({
      error,
      });
  }
});


router.post('/', (req, res) => {
  const body = req.body;

  const nuevoProducto = {
    id: uuidv4(),
    title: body.title,
    price: body.price,
    thumbnail: body.thumbnail,
  };

  productos.push(nuevoProducto);
  res.json({
    nuevoProducto,
  });
});

router.put('/:num', (req, res) => {
  const numeroLetra = parseInt(req.params.num);
  const body = req.body;
  console.log(numeroLetra);

  const posicion = productos.findIndex((aProduct) => aProduct.id === numeroLetra);
  if (posicion == -1) {
    return res.status(404).json({
      msg: 'Product not found',
    });
  }

  productos[posicion].title = body.title;
  productos[posicion].price = body.price;


  res.status(201).json({
    data: productos[posicion],
  });

router.delete('/:id', (req, res) => {
  console.log(req.params);
  const idBuscado = parseInt(req.params.id);

  const posicion = productos.findIndex((aProduct) => aProduct.id === idBuscado);
  /** En caso de no encontrar el producto, respondemos con codigo 404 para indicar el error */
  if (posicion == -1) {
    return res.status(404).json({
      msg: 'Product not found',
    });
  }

  productos.splice(posicion,1);

  res.json({
    data: productos,
  });
});



});



module.exports = router