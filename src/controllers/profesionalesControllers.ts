import executeQuery from "../services/mysql.service";

const obtenerProfesionales = async(req, res) => {
    await executeQuery('SELECT * FROM profesionales').then((response) => {
        res.json(response);
    }).catch(error => {
        res.status(500).send(error);
    })
}

const obtenerProfesional = (req, res) => {
    res.send('respuesta desde el controlador');
}

const agregarProfesionales = (req, res) => {
    res.send('respuesta desde el controlador');
}

const actualizarProfesionales = (req, res) => {
    res.send('respuesta desde el controlador');
}

const eliminarProfesionales = (req, res) => {
    res.send('respuesta desde el controlador');
}

export { obtenerProfesionales, obtenerProfesional, agregarProfesionales, actualizarProfesionales, eliminarProfesionales}