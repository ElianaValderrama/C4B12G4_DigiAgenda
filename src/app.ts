import express from 'express';
import agendasRoutes from './routes/agendas';
import especialidadesRoutes from './routes/especialidades';
import profesionalesRoutes from './routes/profesionales';
import usuariosRoutes from './routes/usuarios';
import config from './config/config';

const app = express();

//para imprimir el body como json
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

usuariosRoutes(app);
profesionalesRoutes(app);
especialidadesRoutes(app);
agendasRoutes(app);

app.get('/prueba', async(req, res, next) => {
    const datos = {
        nombre: "Eliana",
        apellido: "apellido",
        genero: "femenino"
    }
    const myarray = ["perro","gato"]
    const [primero, segundo] = myarray
    const {apellido} = datos;
    /*console.log(req.body)
    //creacion promesa
    console.log('antes de la promesa')
    let x = 10;
    const promesa = new Promise((resolve, reject) =>{
    if(x == 10){
        resolve('la promesa se resuelve')
    }else{
        reject('promesa rechazada')
    }
    });

    //consumir la promesa
    await promesa.then((respuesta) =>{
        console.log(respuesta);
    }).catch(err => {
        console.log(err)
    })

    console.log('despues de la promesa')*/

    res.status(404).json({message: apellido});
});

app.listen(config.PORT, () => {
return console.log(`servidor corriendo en el puerto ${config.PORT}`);
});