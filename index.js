const express = require('express'); 
const app = express();

const PORT = 5000;
// Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido a mi aplicación Express');
});

// Ruta para mostrar 3 clientes
app.get('/clientes', (req, res) => {
    const clientes = ['Cliente 1: Antony', 'Cliente 2: Gonzales', 'Cliente 3: Rojas']; 
    res.json(clientes);
});
// Ruta para mostrar 3 productos
app.get('/productos', (req, res) => {
    const productos = ['Producto 1: camisa', 'Producto 2: polo', 'Producto 3: pantalon']; 
    res.json(productos);
});
app.listen(PORT, ()=> {
    console.log('La aplicación está corriendo en http://localhost:${PORT}');
});