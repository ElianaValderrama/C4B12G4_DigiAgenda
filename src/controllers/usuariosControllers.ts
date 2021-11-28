import executeQuery from "../services/mysql.service";

const obtenerUsuarios = async (req, res) => {
    await executeQuery('SELECT * FROM usuarios').then((response) => {
        res.json(response);
    }).catch(error => {
        res.status(500).send(error);
    })
}

const obtenerUsuario = (req, res) => {
    res.send('respuesta desde el controlador');
}

const agregarUsuarios = (req, res) => {
    res.send('respuesta desde el controlador');
}

const actualizarUsuarios = (req, res) => {
    res.send('respuesta desde el controlador');
}

const eliminarUsuarios = (req, res) => {
    res.send('respuesta desde el controlador');
}

export {
    obtenerUsuarios, obtenerUsuario, agregarUsuarios, actualizarUsuarios, eliminarUsuarios
};