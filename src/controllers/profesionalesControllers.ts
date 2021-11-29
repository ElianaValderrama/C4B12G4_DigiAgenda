import { response } from "express";
import executeQuery from "../services/mysql.service";

const obtenerProfesionales = async(req, res, next) => {
    await executeQuery('SELECT * FROM profesionales').then((response) => {
        res.json(response);
    }).catch(error => {
        next(error);
    })
}

const obtenerProfesional = async(req, res, next) => {
    try{
        const response = await executeQuery(`SELECT * FROM profesionales WHERE id_profesionales = '${req.params.id}'`);
        res.send(response);
    }catch(error) {
        next(error);
    }  
}

const agregarProfesionales = async(req, res, next) => {
    const {nombre_profesionales,apellido_profesionales,edad_profesionales,cel_profesionales,correo_profesionales,genero_profesionales,fecha_nac_profesionales,id_especialidades} = req.body;
    try{
        const response = await executeQuery(`INSERT INTO profesionales (nombre_profesionales,apellido_profesionales,edad_profesionales,cel_profesionales,correo_profesionales,genero_profesionales,fecha_nac_profesionales,id_especialidades) VALUES ('${nombre_profesionales}','${apellido_profesionales}',${edad_profesionales},'${cel_profesionales}','${correo_profesionales}','${genero_profesionales}','${fecha_nac_profesionales}','${id_especialidades}')`);
        res.status(201).json({ message: 'created', id: response.insertId});
    }catch(error) {
        next(error);
    }
}

const actualizarProfesionales = (req, res) => {
    const {nombre_profesionales,apellido_profesionales,edad_profesionales,cel_profesionales,correo_profesionales,genero_profesionales,fecha_nac_profesionales,id_especialidades} = req.body;
    const {id} = req.params;
    executeQuery(`UPDATE profesionales SET nombre_profesionales = '${nombre_profesionales}', apellido_profesionales = '${apellido_profesionales}', edad_profesionales = ${edad_profesionales}, cel_profesionales = ${cel_profesionales}, correo_profesionales = '${correo_profesionales}', genero_profesionales = '${genero_profesionales}', fecha_nac_profesionales = '${fecha_nac_profesionales}', id_especialidades = '${id_especialidades}' WHERE id_profesionales = '${id}'`).then((response) => {
        res.json({message: response.affectedRows > 0 ? 'updated' : 'no existe registor con id: ${req.params.id}'});
    })
}

const eliminarProfesionales = (req, res, next) => {
    executeQuery(`DELETE FROM profesionales WHERE id_profesionales = '${req.params.id}'`).then((response) => {
        res.json({message: response.affectedRows > 0 ? 'deleted' : 'no existe registor con id: ${req.params.id}'});
    }).catch((error) => {
        next(error);
    })
}


export { obtenerProfesionales, obtenerProfesional, agregarProfesionales, actualizarProfesionales, eliminarProfesionales}