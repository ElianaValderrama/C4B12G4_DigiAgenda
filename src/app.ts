import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
res.send('Prueba del servidor');
});

app.listen(port, () => {
return console.log(`servidor corriendo en el puerto ${port}`);
});