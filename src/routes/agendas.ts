import { Router } from "express"
import { actualizarAgendas, agregarAgendas, eliminarAgendas, obtenerAgenda, obtenerAgendas } from "../controllers/agendasControllers";


const agendasRoutes = (app) => {
    const router = Router();
    app.use('/',router);
    //obtiene todas las agendas
    router.get('/obtenerAgendas', obtenerAgendas);
    //obtiene una sola agenda
    router.get('/obtenerAgenda/:id', obtenerAgenda);
    router.post('/agregarAgendas', agregarAgendas);
    router.put('/actualizarAgendas/:id', actualizarAgendas);
    router.delete('/eliminarAgendas/:id', eliminarAgendas);
}

export default agendasRoutes;