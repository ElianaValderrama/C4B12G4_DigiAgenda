import { Router } from "express"
import { actualizarEspecialidades, agregarEspecialidades, eliminarEspecialidades, obtenerEspecialidad, obtenerEspecialidades } from "../controllers/especialidadesControllers";
import errorHandler from "../middleware/error";


const especialidadesRoutes = (app) => {
    const router = Router();
    app.use('/',router);
    //obtiene todas las especialidades
    router.get('/obtenerEspecialidades', obtenerEspecialidades);
    //obtiene un solo especialidad
    router.get('/obtenerEspecialidad/:id', obtenerEspecialidad);
    router.post('/agregarEspecialidades', agregarEspecialidades);
    router.put('/actualizarEspecialidades/:id', actualizarEspecialidades);
    router.delete('/eliminarEspecialidades/:id', eliminarEspecialidades);
}

export default especialidadesRoutes;