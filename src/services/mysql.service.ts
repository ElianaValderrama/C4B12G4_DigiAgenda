import mysql from 'mysql';
import config from '../config/config';

const getConnection = () => {
    const connection = mysql.createConnection({
        port: config.PORT,
        database: config.DATABASE,
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        host: config.DB_HOST
    })
    connection.connect((error) => {
        if(error){
            throw error;
        } else{
            console.log('conexion exitosa');
        }
    })
    return connection;
}

const executeQuery = (query: string) => {
    return new Promise((resolve, reject) => {
        try{
            const connection = getConnection();
            connection.query(query, (error, result) => {
                if(error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        }catch(error){
            reject(error);
        }
    })
}

export default executeQuery;