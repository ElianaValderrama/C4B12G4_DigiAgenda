import { Router } from "express"
import { actualizarUsuarios, agregarUsuarios, eliminarUsuarios, obtenerUsuario, obtenerUsuarios } from "../controllers/usuariosControllers";

const usuariosRoutes = (app) => {
    const router = Router();
    app.use('/',router);
    //obtiene todas los usuarios
    router.get('/obtenerUsuarios', obtenerUsuarios);
    //obtiene un solo usuario
    router.get('/obtenerUsuarios/:id', obtenerUsuario);
    router.post('/agregarUsuarios', agregarUsuarios);
    router.put('/actualizarUsuarios/:id', actualizarUsuarios);
    router.delete('/eliminarUsuarios/:id', eliminarUsuarios);
}

export default usuariosRoutes;