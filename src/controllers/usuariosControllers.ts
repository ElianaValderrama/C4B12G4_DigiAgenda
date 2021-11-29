import { response } from "express";
import executeQuery from "../services/mysql.service";

const obtenerUsuarios = async (req, res) => {
    await executeQuery('SELECT * FROM usuarios').then((response) => {
        res.json(response);
    }).catch(error => {
        console.log(error);
        res.status(500).send(error);
    })
}

const obtenerUsuario = async(req, res) => {
    try{
        const response = await executeQuery(`SELECT * FROM usuarios WHERE id_usuarios = '${req.params.id}'`);
        res.send(response);
    }catch(error) {
        console.log(error);
        res.status(500).send(error);
    }    
}

const agregarUsuarios = async(req, res) => {
    const {nombre_usuario, apellido_usuario, edad_usuario, cel_usuario, correo_usuario, genero_usuario, fecha_nac_usuario, password} = req.body;
    try{
        const response = await executeQuery(`INSERT INTO usuarios (nombre_usuario, apellido_usuario, edad_usuario, cel_usuario, correo_usuario, genero_usuario, fecha_nac_usuario, password) VALUES ('${nombre_usuario}','${apellido_usuario}',${edad_usuario},'${cel_usuario}','${correo_usuario}','${genero_usuario}','${fecha_nac_usuario}','${password}')`);
        res.status(201).json({ message: 'created', id: response.insertId});
    }catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const actualizarUsuarios = (req, res) => {
    const {nombre_usuario, apellido_usuario, edad_usuario, cel_usuario, correo_usuario, genero_usuario, fecha_nac_usuario, password} = req.body;
    const {id} = req.params;
    executeQuery(`UPDATE usuarios SET nombre_usuario = '${nombre_usuario}', apellido_usuario = '${apellido_usuario}', edad_usuario = ${edad_usuario}, cel_usuario = ${cel_usuario}, correo_usuario = '${correo_usuario}', genero_usuario = '${genero_usuario}', fecha_nac_usuario = '${fecha_nac_usuario}', password = '${password}' WHERE id_usuarios = '${id}'`).then((response) => {
        res.json({message: response.affectedRows > 0 ? 'updated' : 'no existe registor con id: ${req.params.id}'});
    })
}

const eliminarUsuarios = (req, res) => {
    executeQuery(`DELETE FROM usuarios WHERE id_usuarios = '${req.params.id}'`).then((response) => {
        res.json({message: response.affectedRows > 0 ? 'deleted' : 'no existe registor con id: ${req.params.id}'});
    }).catch((error) => {
        console.log(error);
        response.status(500).send(error);
    })
}

export {
    obtenerUsuarios, obtenerUsuario, agregarUsuarios, actualizarUsuarios, eliminarUsuarios
};