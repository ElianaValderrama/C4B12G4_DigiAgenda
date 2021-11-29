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

const agregarAgendas = (req, res) => {
    res.send('respuesta desde el controlador');
}

const actualizarAgendas = (req, res) => {
    res.send('respuesta desde el controlador');
}

const eliminarAgendas = (req, res) => {
    res.send('respuesta desde el controlador');
}

export {obtenerAgendas, obtenerAgenda, agregarAgendas, actualizarAgendas, eliminarAgendas}