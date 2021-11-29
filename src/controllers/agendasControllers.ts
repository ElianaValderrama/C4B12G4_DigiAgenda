import { response } from "express";
import executeQuery from "../services/mysql.service";

const obtenerAgendas = async(req, res) => {
    await executeQuery('SELECT * FROM agendas').then((response) => {
        res.json(response);
    }).catch(error => {
        res.status(500).send(error);
    })
}

const obtenerAgenda = async(req, res) => {
    try{
        const response = await executeQuery(`SELECT * FROM agendas WHERE id_agendas = '${req.params.id}'`);
        res.send(response);
    }catch(error) {
        console.log(error);
        res.status(500).send(error);
    }  
}

const agregarAgendas = async(req, res) => {
    const {fecha_agendas,hora_desde,hora_hasta,id_especialidades,detalle,id_profesionales,id_usuarios} = req.body;
    try{
        const response = await executeQuery(`INSERT INTO agendas (fecha_agendas,hora_desde,hora_hasta,id_especialidades,detalle,id_profesionales,id_usuarios) VALUES ('${fecha_agendas}','${hora_desde}',${hora_hasta},'${id_especialidades}','${detalle}','${id_profesionales}','${id_usuarios}')`);
        res.status(201).json({ message: 'created', id: response.insertId});
    }catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const actualizarAgendas = (req, res) => {
    const {fecha_agendas,hora_desde,hora_hasta,id_especialidades,detalle,id_profesionales,id_usuarios} = req.body;
    const {id} = req.params;
    executeQuery(`UPDATE agendas SET fecha_agendas = '${fecha_agendas}', hora_desde = '${hora_desde}', hora_hasta = '${hora_hasta}', id_especialidades = '${id_especialidades}', detalle = '${detalle}', id_profesionales = '${id_profesionales}', id_usuarios = '${id_usuarios}' WHERE id_agendas = '${id}'`).then((response) => {
        res.json({message: response.affectedRows > 0 ? 'updated' : 'no existe registor con id: ${req.params.id}'});
    })
}

const eliminarAgendas = (req, res) => {
    executeQuery(`DELETE FROM agendas WHERE id_agendas = '${req.params.id}'`).then((response) => {
        res.json({message: response.affectedRows > 0 ? 'deleted' : 'no existe registor con id: ${req.params.id}'});
    }).catch((error) => {
        console.log(error);
        response.status(500).send(error);
    })
}

export {obtenerAgendas, obtenerAgenda, agregarAgendas, actualizarAgendas, eliminarAgendas}