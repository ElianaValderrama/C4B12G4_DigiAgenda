import { Router } from "express"
import { actualizarProfesionales, agregarProfesionales, eliminarProfesionales, obtenerProfesional, obtenerProfesionales } from "../controllers/profesionalesControllers";
import errorHandler from "../middleware/error";


const profesionalesRoutes = (app) => {
    const router = Router();
    app.use('/',router);
    //obtiene todas los profesionales
    router.get('/obtenerProfesionales', obtenerProfesionales);
    //obtiene un solo profesional
    router.get('/obtenerProfesional/:id', obtenerProfesional);
    router.post('/agregarProfesionales', agregarProfesionales);
    router.put('/actualizarProfesionales/:id', actualizarProfesionales);
    router.delete('/eliminarProfesionales/:id', eliminarProfesionales);

    app.use(errorHandler);
}

export default profesionalesRoutes;