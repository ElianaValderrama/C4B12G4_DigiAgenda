import { Router } from "express"

const usuariosRoutes = (app) => {
    const router = Router();
    app.use('/',router);
    //obtiene todas los usuarios
    router.get('/obtenerUsuarios', (req, res) => res.send('Obtener Canciones'));
    //obtiene un solo usuario
    router.get('/obtenerUsuarios/:id', (req, res) => res.send('Obtener Canciones'));
    router.post('/agregarUsuarios', (req, res) => res.send('Obtener Canciones'));
    router.put('/actualizarUsuarios/:id', (req, res) => res.send('Obtener Canciones'));
    router.delete('/eliminarUsuarios/:id', (req, res) => res.send('Obtener Canciones'));
}

export default usuariosRoutes;