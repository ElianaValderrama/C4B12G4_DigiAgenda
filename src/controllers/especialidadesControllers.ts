import executeQuery from "../services/mysql.service";

const obtenerEspecialidades = async(req, res) => {
    await executeQuery('SELECT * FROM especialidades').then((response) => {
        res.json(response);
    }).catch(error => {
        res.status(500).send(error);
    })
}

const obtenerEspecialidad = (req, res) => {
    res.send('respuesta desde el controlador');
}

const agregarEspecialidades = (req, res) => {
    res.send('respuesta desde el controlador');
}

const actualizarEspecialidades = (req, res) => {
    res.send('respuesta desde el controlador');
}

const eliminarEspecialidades = (req, res) => {
    res.send('respuesta desde el controlador');
}

export {obtenerEspecialidades, obtenerEspecialidad, agregarEspecialidades, actualizarEspecialidades, eliminarEspecialidades}