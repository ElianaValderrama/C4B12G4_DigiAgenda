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