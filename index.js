const express = require('express')
const Container = require('./productos');

const app = express()
const PORT = 8060

const archivo = new Container('productos.txt')

app.get('/products', async (req, res) => {
    const productos = await archivo.getAll()
    res.send({Productos: productos})
})

app.get('/random', async (req, res) => {
    const productos = await archivo.getAll()
    const random = parseInt(Math.random() * productos.length)
    res.send({Productos: productos[random]})
})

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en ${PORT}`);
})