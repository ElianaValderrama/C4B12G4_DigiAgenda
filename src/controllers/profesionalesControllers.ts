import executeQuery from "../services/mysql.service";

const obtenerProfesionales = async(req, res) => {
    await executeQuery('SELECT * FROM profesionales').then((response) => {
        res.json(response);
    }).catch(error => {
        res.status(500).send(error);
    })
}

const obtenerProfesional = async(req, res) => {
    try{
        const response = await executeQuery(`SELECT * FROM profesionales WHERE id_profesionales = '${req.params.id}'`);
        res.send(response);
    }catch(error) {
        console.log(error);
        res.status(500).send(error);
    }  
}

const agregarProfesionales = async(req, res) => {
  //const {nombre_profesionales, apellido_profesionales, edad_profesionales, cel_profesionales, correo_profesionales, genero_profesionales, fecha_nac_profesionales, id_especialidades} = req.body;
    try{
        const response = await executeQuery(`INSERT INTO profesionales (nombre_profesionales, apellido_profesionales, edad_profesionales, cel_profesionales, correo_profesionales, genero_profesionales, fecha_nac_profesionales, id_especialidades) VALUES ('${req.body.nombre_profesionales}','${req.body.apellido_profesionales}',${req.body.edad_profesionales},${req.body.cel_profesionales},'${req.body.correo_profesionales}','${req.body.genero_profesionales}','${req.body.fecha_nac_profesionales}',${req.body.id_especialidades})`);
        res.status(201).json({ message: 'created', id: response.insertId});
    }catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const actualizarProfesionales = (req, res) => {
    res.send('respuesta desde el controlador');
}

const eliminarProfesionales = (req, res) => {
    res.send('respuesta desde el controlador');
}

export { obtenerProfesionales, obtenerProfesional, agregarProfesionales, actualizarProfesionales, eliminarProfesionales}