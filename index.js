const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Habilitar CORS
app.use(cors());
app.use(express.static('.')); // Asegúrate de servir archivos estáticos desde la raíz

// Datos simulados de las ciudades
const ciudades = [
    { nombre: 'Bogotá', clima: 'Tropical', temperatura: 14 },
    { nombre: 'Medellín', clima: 'Tropical', temperatura: 22 },
    { nombre: 'Cali', clima: 'Tropical', temperatura: 25 },
    { nombre: 'BARRANQUILLA', clima: 'Tropical', temperatura: 30 }
];

// Ruta para obtener las ciudades
app.get('/api/ciudades', (req, res) => {
    res.json(ciudades);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
