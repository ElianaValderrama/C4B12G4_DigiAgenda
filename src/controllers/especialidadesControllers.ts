import { response } from "express";
import executeQuery from "../services/mysql.service";

const obtenerEspecialidades = async(req, res) => {
    await executeQuery('SELECT * FROM especialidades').then((response) => {
        res.json(response);
    }).catch(error => {
        res.status(500).send(error);
    })
}

const obtenerEspecialidad = async(req, res) => {
    try{
        const response = await executeQuery(`SELECT * FROM especialidades WHERE id_especialidades = '${req.params.id}'`);
        res.send(response);
    }catch(error) {
        console.log(error);
        res.status(500).send(error);
    }  
}

const agregarEspecialidades = async(req, res) => {
    const {nombre_especialidades} = req.body;
    try{
        const response = await executeQuery(`INSERT INTO especialidades (nombre_especialidades) VALUES ('${nombre_especialidades}')`);
        res.status(201).json({ message: 'created', id: response.insertId});
    }catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const actualizarEspecialidades = (req, res) => {
    const {nombre_especialidades} = req.body;
    const {id} = req.params;
    executeQuery(`UPDATE especialidades SET nombre_especialidades = '${nombre_especialidades}' WHERE id_especialidades = '${id}'`).then((response) => {
        res.json({message: response.affectedRows > 0 ? 'updated' : 'no existe registor con id: ${req.params.id}'});
    })
}

const eliminarEspecialidades = (req, res) => {
    executeQuery(`DELETE FROM especialidades where id_especialidades = '${req.params.id}'`).then((response) => {
        res.json({message: response.affectedRows > 0 ? 'deleted' : 'no existe registor con id: ${req.params.id}'});
    }).catch((error) => {
        console.log(error);
        response.status(500).send(error);
    })
}

export {obtenerEspecialidades, obtenerEspecialidad, agregarEspecialidades, actualizarEspecialidades, eliminarEspecialidades}